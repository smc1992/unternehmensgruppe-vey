#!/bin/sh
# Dockerfile for React + Node.js application
FROM node:20-alpine

# Install serve globally
RUN npm install -g serve@14.2.4

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["sh", "-c", "serve -s out -l 3000 & node server.js"]
