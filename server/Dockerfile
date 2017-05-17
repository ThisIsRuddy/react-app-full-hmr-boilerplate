FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/server

COPY /src /var/www/server/src
COPY /.babelrc /var/www/server/.babelrc
COPY /package.json /var/www/server/package.json
COPY /webpack.config.js /var/www/server/webpack.config.js

RUN apk update
RUN mkdir -p /var/www/server/build && cd /var/www/server
RUN npm install

CMD npm start