FROM node:alpine
WORKDIR /usr/graphql/mern/client
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

#b2dc2ad04798aa2c4c57147ef0fe8c9f0e223ba066360484287e3c9f602c0fb4