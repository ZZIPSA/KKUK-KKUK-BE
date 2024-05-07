#!/bin/bash

# Variables
APP_DIR="/home/ubuntu/kkuk-kkuk-be"
DOCKER_IMAGE_NAME="kkuk-kkuk-be"

# Extract Docker image
cd $APP_DIR
docker load < kkuk-kkuk-be.tar.gz

# Run Docker container
docker stop $DOCKER_IMAGE_NAME || true
docker rm $DOCKER_IMAGE_NAME || true
docker run -d -p 3000:3000 --env-file .env --name $DOCKER_IMAGE_NAME $DOCKER_IMAGE_NAME
