FROM node:12.18-alpine as debug

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
RUN npm install -g nodemon
COPY . .
ENV NODE_ENV=debug
EXPOSE 3000
ENTRYPOINT [ "nodemon", "-r", "esm", "--inspect=0.0.0.0", "server.js" ]
