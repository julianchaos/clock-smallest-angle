FROM node:10.13-alpine
LABEL maintainer="Julian Andrade julian@ndrade.com.br"
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3030
CMD npm start
