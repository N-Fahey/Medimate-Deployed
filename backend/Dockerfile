# syntax=docker/dockerfile:1

# Args
ARG BUILD_TYPE="production"

# Stage 1: Dependencies
FROM node:lts-alpine3.22 AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci --omit-dev

# Stage 2: Runtime
FROM node:lts-alpine3.22 AS production

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

ENV HOST=0.0.0.0
ENV PORT=5000
ENV MONGODB_URI=mongodb://mongo:27017/medimate

EXPOSE 5000

CMD [ "npm", "start" ]