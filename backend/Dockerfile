# syntax=docker/dockerfile:1

# Args
ARG BUILD_TYPE="production"

# Stage 1: Dependencies
FROM node:lts-alpine3.22 AS builder

WORKDIR /app

ENV NODE_ENV=${BUILD_TYPE}

COPY package*.json ./

RUN npm ci

# Stage 2: Runtime
FROM node:lts-alpine3.22 AS runtime

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules

COPY --chown=appuser:appgroup . .

USER appuser

EXPOSE 5000

CMD [ "npm", "start" ]