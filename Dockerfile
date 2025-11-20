FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# Copy package.json and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY app.cjs ./

EXPOSE 3000

CMD ["node", "app.cjs"]
