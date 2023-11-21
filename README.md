# Introduction

Welcome to the VPlatform API Template Project. This project template will serve as a starting point for developers that will be creating API projects in NestJS quickly and efficiently. Whether you're building a API with SQL procedures or with MongoDB, this template will provide the best practices and helpful tools/tips in running the project on your system.

## Table Of Contents:

- Project Structure
- Installation process
- Running the app
- Features

## Project Structure

- A structure file is addded inside doc which states the basic folder structure followed in the project. Click here [🗄️ Project Structure](doc/structure.md)

## Installation Process

```bash
$ npm install
# if required
$ npm install <module_name>
```

### Before writing your code, change the `api-template` to your actual project name.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Features:

### JWT Verification for authorization

- It is required for the authorization of the end-points. JWT secret and other requirements are added in the .env file. A token.guards.ts file is added in the guards folder inside common.

### Health Checks

- A health check represents a summary of health indicators. A health indicator executes a check of a service, whether it is in a healthy(db up and running) or unhealthy state(db down and error).
- The health check will send a GET request to the respective database. If we get a healthy response, our route http://localhost:3030/health/ready will get status 'OK' and 'UP'. Follow https://docs.nestjs.com/recipes/terminus for more information.

### Validator/Validation

- To validate the incoming requests, Nestjs uses class-validator package and its decorators. Nestjs provides in-built ValidationPipe which enforces the validation rules. With the help of class-validator, the specific rules are declared in the dtos in each module.
  Follow https://docs.nestjs.com/techniques/validation for more information.

### DockerFile

- Docker is a configuration management tool that is used to automate the deployment of software in lightweight containers. These containers help applications to work efficiently in different environments.
- A Docker Image is a read-only file with a bunch of instructions. When these instructions are executed, it creates a Docker container.
- Dockerfile is a simple text file that consists of instructions to build Docker images.

### Error Handling

- The error is handled globally with the help of NestJS [exception filter](src/common/filters/exception.filter.ts)

### Error logging

- Pending

### Swagger Documentation

- Documentation with swagger is done at the controller level. The requirement to create a swagger.json file and the info and contact for swagger is added in [main.ts file](src/main.ts). For reference https://dev.azure.com/vgroupframework/VPlatform-Microservices/_git/Vessel-Incident-Management and guide to best practices and writing swagger documentation via vscode: https://dev.azure.com/vgroupframework/VPlatform-Documentation/_wiki/wikis/VPlatform-Documentation.wiki/2885/SwaggerHub

### Versioning

- Work in progress.
