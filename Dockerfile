FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY tests ./tests

RUN npm install

RUN npm run build

CMD [ "node", "dist/index.js" ]
