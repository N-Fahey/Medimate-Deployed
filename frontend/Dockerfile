# syntax=docker/dockerfile:1

# Stage 1: Dependencies
FROM node:lts-alpine3.22 AS builder

# Args
ARG BUILD_TYPE="production"
ARG API_URL="http://localhost:3000"

WORKDIR /app

ENV NODE_ENV=${BUILD_TYPE}
ENV VITE_API_BASE_URL=${API_URL}

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Runtime
FROM nginx:stable-alpine3.23 AS runtime

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80