#!/bin/sh

if [ "$NODE_ENV" = "development" ]; then
  echo "Starting in development mode"
  npm run dev
elif [ "$NODE_ENV" = "testing" ]; then
  echo "Starting in testing mode"
  npm run test
  npm run dev
else
  echo "No valid launch type found. Starting in development mode"
  npm run start
fi
