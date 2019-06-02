FROM node:latest

WORKDIR /usr/src/api

ENV PATH /usr/src/api/node_modules/.bin:$PATH

ADD package.json /usr/src/api/package.json

RUN npm install -g nodemon

RUN npm install

COPY . .

CMD ["npm", "start"]