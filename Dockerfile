# Stage - Build
FROM node:20.11.1-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

ARG API_URL
ARG API_TOKEN

ENV API_URL=$API_URL
ENV API_TOKEN=$API_TOKEN

COPY . .

COPY .env.example ./.env

RUN sh ./build.sh

RUN yarn build

# Stage - Production
FROM node:20.11.1-alpine

WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/.env ./.env.production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Arguments
ARG NODE_ENV=production
ARG SITE_PORT
ARG API_URL
ARG API_TOKEN

# ENV variables
ENV NODE_ENV=production
ENV API_URL=$API_URL
ENV API_TOKEN=$API_TOKEN

EXPOSE 3000

CMD ["yarn", "start"]