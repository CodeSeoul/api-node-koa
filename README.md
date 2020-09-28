# Build an API Server using NodeJS and Koa

This repository is a brief tutorial and demonstration of how to use NodeJS and how to setup an API server using the Koa framework.

## What's NodeJS?
NodeJS allows us to run Javascript code directly in our operating system instead of inside a browser. It runs on top of Google's V8 Javascript engine. If you want to run Javascript outsode of the browser, chances are that you'll be using NodeJS.

## What's NPM?
NPM is short for Node Package Manager and is accessible via the `npm` CLI command. NPM is used to install dependencies, run tasks, and configure metadata for your project.

## What's Koa?
Koa is a new framework for building web servers on NodeJS. You've probably heard of the popular ExpressJS framework; Koa is its descendant. Whereas ExpressJS focuses on routes, Koa focuses on middlewares; however, you can still create routes on top of middlewares. If none of this makes sense, don't worry. We'll cover it in more detail.

## The Files
We'll review each file and the purpose it serves. You should review the files in the order that is listed below.

### package.json
* This defines the metadata for our project, like the name, dependencies, and helper scripts.
* How did we do it?
    1. `npm init` to setup `package.json`
    2. `npm install --save axios koa koa-bodyparser koa-joi-router` to install dependencies
    3. `npm install --save-dev jest` to install our development-only dependencies
    4. Add `"private": true` to prevent accidental publishing to npm
    5. Add `"type": "module"` to allow ES6 imports
    6. In `scripts`, add the `basic`, `start`, and `test` scripts for running our basic NodeJS demonstration, starting our Koa server, and running our tests, respectively

### package-lock.json
You can ignore this, but make sure to include it in Git. The `npm` tool uses this to carefully track your dependencies.

### nodebasic.js
This file demonstrates some of the core features of NodeJS. This will be helpful for running NodeJS in general, even when not building API servers. The comments in this file have more detailed information.

### index.js
This is our "entrypoint", that is, the file that starts up our whole server. Here, we setup the Koa web server and all of the supporting systems.

### routes/index.js
This defines our routes. A route is a combination of the HTTP method and a URL path to determine what set of logic to run. Routes are often described by a combination of the HTTP method and URL path, e.g. `GET /users`. If you're not familiar with HTTP and URLs, you should read up on those separately.

### controllers/index.js
Here, we define a basic controller. A controller is the logic that is used to manipulate some data. If you're familiar with the MVC server design, this is the same controller as in that framework. Routers use controllers to fulfill the request that the route matches.

## How to Run
* Use `npm run basic` to run the basic NodeJS example
* Use `npm run start` to run the Koa server
* Use `npm run test` to run our Jest test
