FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "docker"]