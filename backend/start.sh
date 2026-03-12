#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  echo "Starting in production mode"
  npm run start
elif [ "$NODE_ENV" = "development" ]; then
  echo "Starting in development mode"
  npm run start:dev
elif [ "$NODE_ENV" = "testing" ]; then
  echo "Starting in testing mode"
  npm run start:test
else
  echo "No valid launch type found. Starting in production mode"
  npm run start
fi
