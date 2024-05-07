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

# Run new Docker container
docker-compose -f docker-compose.yml up -d
