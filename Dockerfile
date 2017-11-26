FROM monstrs/node-yarn:7.8

RUN mkdir /app
WORKDIR /app

COPY .babelrc /app
COPY package.json /app
COPY build/webpack-assets.json /app/build/webpack-assets.json
COPY bin /app/bin
COPY src /app/src
COPY node_modules /app/node_modules

COPY build /static
COPY config/nginx /etc/nginx/conf.d

VOLUME ["/etc/nginx/conf.d", "/static"]

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "bin/exec.js", "server"]
