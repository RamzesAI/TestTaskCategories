#RUN npm install -g typescript ts-node nodemon pg

FROM node:16.15

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --dev

RUN npm i -g @nestjs/cli rimraf env-cmd

COPY . .

RUN npm run build
