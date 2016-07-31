FROM node:6

RUN mkdir /app
WORKDIR /app

COPY .babelrc /app
COPY package.json /app
COPY bin /app/bin
COPY src /app/src
COPY public /app/public

RUN npm install --only=prod

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npm", "run", "server" ]
