FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/client

COPY /src /var/www/client/src
COPY /.babelrc /var/www/client/.babelrc
COPY /package.json /var/www/client/package.json
COPY /webpack.config.js /var/www/client/webpack.config.js

RUN apk update
RUN cd /var/www/client
RUN npm install

EXPOSE 8080

CMD npm start