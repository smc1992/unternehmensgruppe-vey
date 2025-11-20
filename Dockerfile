FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY --from=builder /app/dist ./dist
COPY app.cjs ./

EXPOSE 3000

CMD ["node", "app.cjs"]
