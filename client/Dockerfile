FROM node:latest

WORKDIR /usr/src/client

ENV PATH /usr/src//client/node_modules/.bin:$PATH

ADD package.json /usr/src/client/package.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .

CMD ["npm","start"]