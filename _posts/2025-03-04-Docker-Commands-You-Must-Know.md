---
categories: [programming]
tags: [docker, programming, devops]
title: Essential Docker Commands You Must Know [Cheatsheet]
toc: true
comments: true
---

## Basic Commands

```bash
# Show Docker all commands
docker --help

# Show Docker version
docker version
docker -v

# Show Docker system-wide information
docker info

# login to Docker Hub
docker login

# logout from Docker Hub
docker logout
```

## Images

```bash
# Show all images
docker images

# Show all images ID
docker images -q

# build an image from dockerfile
docker build -t <image_name> .

# inspect an image
docker inspect <image_name>

# remove image with ID
docker rmi <image_id>

# Remove all images
docker rmi $(docker images -q)

# remove unused images
docker image prune
```

## Containers

```bash
# run a container
docker run --name <container_name> <image_name>

# run a container in background
docker run -d --name <container_name> <image_name>

# map port while running container
docker run -d -p <host-port>:<container-port> --name <container_name> <image_name>

# start/stop container
docker start|stop <container_name>

# login into container
docker exec -it <container_name> bash

# inplace logs of container
docker logs -f <container_name>

# inspect a container
docker inspect <container_name>

# remove container
docker rm <container_name>

# remove unused containers
docker container prune

# remove all containers
docker rm $(docker ps -a -q)

# Show running containers 
docker ps

# Show all containers
docker ps -a

# docker container stats
docker stats
```

## Volumes

```bash
# create a volume
docker volume create <volume_name>

# list all volumes
docker volume ls

# remove a volume
docker volume rm <volume_name>

# inspect a volume
docker volume inspect <volume_name>

# inspect a volume
docker volume inspect <volume_name>

# remove unused volumes
docker volume prune

# remove all volumes
docker volume rm $(docker volume ls -q)
```

## Networks

```bash
# create a network
docker network create <network_name>

# list all networks
docker network ls

# remove a network
docker network rm <network_name>

# inspect a network
docker network inspect <network_name>

# remove unused networks
docker network prune

# remove all networks
docker network rm $(docker network ls -q)
```

## Docker Compose

```bash
# run docker-compose
docker compose up

# run docker-compose in background
docker compose up -d

# stop docker-compose
docker compose down

# restart docker-compose
docker compose restart

# remove docker-compose
docker compose rm

# list of running services
docker compose ps

# list of all services
docker compose ps -a
```

## Miscellaneous

```bash
# show docker system resources
docker system df

# show docker system events
docker system events

# show docker system info
docker system info

# remove all unused resources
docker system prune

# history of image
docker history <image_name>

# check running process of a container
docker top <container_name>

# set tag to an image
docker tag <image_name> <tag_name>
```
