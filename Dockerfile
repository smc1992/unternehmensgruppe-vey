# Multi-stage Dockerfile for React Frontend + Node.js Backend
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Install serve for static files
RUN npm install -g serve@14.2.4

# Set working directory
WORKDIR /app

# Copy built frontend from builder stage
COPY --from=builder /app/out ./out

# Copy backend files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy server.js
COPY --from=builder /app/server.js ./

# Install production dependencies only
RUN npm install --only=production

# Expose ports
EXPOSE 3000 3001

# Start both frontend and backend
CMD ["sh", "-c", "serve -s out -l 3000 & node server.js"]
