# Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json .
COPY yarn.lock .

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN yarn

# Builder
From node:18-alpine as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

# Runner
FROM node:18-alpine as runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

CMD ["yarn", "start"]