FROM node:12.18-alpine

WORKDIR /usr/src/app
COPY package.json .
RUN npm i --only=production
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "npm", "start" ]