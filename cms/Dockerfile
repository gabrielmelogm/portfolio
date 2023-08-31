FROM node:18-alpine

WORKDIR /home/node/app
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 1337

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

CMD ["yarn", "start"]