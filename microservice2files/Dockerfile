FROM node:16

#create app directory
WORKDIR /usr/src/app

#install app dependecies
#A wildcard is used to ensure both package.json and package-lock.json are copied
#where avalible
COPY package*.json ./

RUN npm install

COPY microservice2.js .

EXPOSE 9000

CMD ["node", "microservice2.js"]
