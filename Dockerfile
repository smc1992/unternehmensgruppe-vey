FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci || npm ci || npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# Copy package.json and install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev || npm ci --omit=dev || npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY server.cjs ./

EXPOSE 3000

CMD ["node", "server.cjs"]
