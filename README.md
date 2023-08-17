# Building and Securing a Modern Backend API - Decoupling

This repo contains the completed demo code for building and securing a modern backend API


To get the app up and running you will need to have an Auth0 account. You can sign up for one [here](https://auth0.com/signup?utm_source=scotch.io&utm_medium=sp&utm_campaign=api_authorization).

Many modern applications separate the backend services from the frontend user interface (MVC - loose coupling and a platform for facilitating micro services). In this type of architecture, the backend will expose a web based API that the frontend client consumes. Typically, the backend will handle incoming requests and return a JSON or XML encoded response. The frontend will then be in charge of formatting, styling, and displaying this response to the user. We’ve all heard the term “separation of concerns” and applying it at this scale has many benefits.

The backend services can grow and evolve independent of the frontend client. New APIs, if properly versioned, can provide new features and functionality without breaking existing integrations. A single backend can interface with multiple clients and the frontend clients will not be limited to any specific framework or programming language. This means that your single backend can work with your app for both a web based implementation, your mobile app, and even with IoT devices.

This exercise builds and exposes a RESTful API built with NodeJS. We are also going to build two front-end clients, also with NodeJS, that are going to consume our API. Our API is going to be protected with Auth0. In addition to protecting our API endpoints, we’ll also add specific roles to each of our clients and show how we can give granular access to our API.

Enjoy!

## Solution Dsign
https://github.com/kukuu/-SECURE-API/blob/master/solution-design.md
