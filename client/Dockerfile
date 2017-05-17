FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/client

ADD /src /var/www/client/src
ADD /.babelrc /var/www/client/.babelrc
ADD /package.json /var/www/client/package.json
ADD /webpack.config.js /var/www/client/webpack.config.js

RUN apk update
RUN cd /var/www/client
RUN npm install

CMD npm start