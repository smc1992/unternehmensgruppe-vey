FROM node:20-alpine

RUN npm install -g serve@14.2.4

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm ci

# Copy Docker-specific index.html without script tag
RUN cp index.docker.html index.html

RUN npm run build

EXPOSE 3000

CMD ["node", "app.cjs"]
