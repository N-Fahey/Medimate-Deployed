# syntax=docker/dockerfile:1

# Stage 1: Dependencies
FROM node:lts-alpine3.22 AS builder

# Args
ARG BUILD_TYPE="production"

WORKDIR /app

ENV NODE_ENV=${BUILD_TYPE}

COPY package*.json ./

RUN npm ci

# Stage 2: Runtime
FROM node:lts-alpine3.22 AS runtime

# Args
ARG BUILD_TYPE="production"

ENV NODE_ENV=${BUILD_TYPE}

WORKDIR /app

# Copy main files and chown to appuser
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --chown=appuser:appgroup . .

# Set up permissions of start script
RUN chmod +x start.sh

USER appuser

EXPOSE 5000

CMD [ "./start.sh" ]