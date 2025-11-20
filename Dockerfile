FROM node:20-alpine

RUN npm install -g serve@14.2.4

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm ci

RUN chmod -R 755 /app

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "serve -s out -l 3000 & node server.js"]
