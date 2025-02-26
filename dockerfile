FROM node:20

WORKDIR /proj01
COPY  . .

RUN npm install


CMD [ "npm", "start" ]


