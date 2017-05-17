FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/server

ADD /src /var/www/server/src
ADD /.babelrc /var/www/server/.babelrc
ADD /package.json /var/www/server/package.json
ADD /webpack.config.js /var/www/server/webpack.config.js

RUN apk update
RUN mkdir -p /var/www/server/build && cd /var/www/server
RUN npm install

CMD npm start