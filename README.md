# Building and Securing a Modern Backend API

This repo contains the completed demo code for building and securing a modern backend API


To get the app up and running you will need to have an Auth0 account. You can sign up for one [here](https://auth0.com/signup?utm_source=scotch.io&utm_medium=sp&utm_campaign=api_authorization).

Many modern applications separate the backend services from the frontend user interface. In this type of architecture, the backend will expose a web based API that the frontend client consumes. Typically, the backend will handle incoming requests and return a JSON or XML encoded response. The frontend will then be in charge of formatting, styling, and displaying this response to the user. We’ve all heard the term “separation of concerns” and applying it at this scale has many benefits.

The backend services can grow and evolve independent of the frontend client. New APIs, if properly versioned, can provide new features and functionality without breaking existing integrations. A single backend can interface with multiple clients and the frontend clients will not be limited to any specific framework or programming language. This means that your single backend can work with your app for both a web based implementation, your mobile app, and even with IoT devices.

This exercise builds and exposes a RESTful API built with NodeJS. We are also going to build two front-end clients, also with NodeJS, that are going to consume our API. Our API is going to be protected with Auth0. In addition to protecting our API endpoints, we’ll also add specific roles to each of our clients and show how we can give granular access to our API.

<!--The application we are building today will be an app called Movie Analyst. Movie Analyst aggregates and displays a list of the latest movie reviews by famous critics across the web. Users can view the latest movie reviews, learn about the critics that review them, and also see the publications that Movie Analyst has partnered with. Website administrators, who will have a separate website, can see and edit these pages, but also have access to reviews-in-progress so that they can prepare and approve reviews ahead of time.

Rather than building two separate backends for the user facing side and the admin application, we are going to build and expose an API with four endpoints. The user facing app will have access to the movies, reviewers and publications endpoints, while the admin app will additionally have access to the pending endpoint which will return movie reviews that are not ready to be publically accessible. We’ll start by building our API.

Building a Node API

We’ll build our backend API with NodeJS and the Express framework. To get started let’s create a directory called movie-analyst-api, navigate into it and run npm init to setup our package.json file. You can leave all the default settings, or change them as you see fit. Once you’ve gone through the setup, the package.json file will be created in your directory.

Before we get to writing code, let’s take care of our dependencies. Run npm install express express-jwt auth0-api-jwt-rsa-validation --save to install the dependencies we are going to need. The express dependency will pull down the express framework, express-jwt library will give us functions to work with JSON Web Tokens, and finally auth0-api-jwt-rsa-validation will provide a helper function for getting our secret key.

Now that we have our dependencies in place, let’s create a new file called server.js. Since our backend API is only going to expose a few routes, we’ll write all of our code in this single file. Check out our implementation below.

If we launch our API server and navigate to any of the four routes we’ve created, we should get the expected response. Let’s test this by running node server and navigating to localhost:8080/movies. You should see a JSON response with the list of movie reviews and their associated data.

We have our API but now anyone can call it. Let’s fix this by securing our endpoints with Auth0. Auth0 makes user identity simple and recently they released a new feature to make securing API endpoints a breeze as well. If you don’t already have an Auth0 account, signup for a free account here. Once you’ve signed up, navigate to your Auth0 dashboard and click on the New Client button to create a new Auth0 application.

For the client type, select Non-Interactive Client and name it MovieAnalyst Website. Click on the Create button to create the client.

https://scotch.io/tutorials/building-and-securing-a-modern-backend-api-->
