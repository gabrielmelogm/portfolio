FROM node:18-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV development

COPY --chown=node:node package*.json ./

RUN yarn install

RUN mkdir -p .next
RUN chown node:node . node_modules .next

USER node

CMD ["yarn", "dev"]