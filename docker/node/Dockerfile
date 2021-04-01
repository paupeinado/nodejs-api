FROM node:14.16.0

COPY package.json /var/app/

WORKDIR /var/app

RUN npm i -g nodemon
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]