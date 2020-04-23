# Neighborhood Chef

You can find the deployed project at [www.ourneighborhoodchef.com](https://master.d2jw35dcr89i4u.amplifyapp.com/)

## Contributors

|                                                          [Kyle Richardson](https://github.com/kyle-richardson)                                                           |                                                       [Paul Edwards](https://github.com/PaulMEdwards)                                                        |                                                      [Aaron Merrifield-Lucier](https://github.com/Aaroneld)                                                       |                                                       [Brennan Neilson](https://github.com/bvneilson)                                                        |                                                      [Patrick Replogle](https://github.com/patrick-replogle)                                                       |                                                          [Miguel Leal](https://twitter.com/lealitos)                                                           |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars3.githubusercontent.com/u/52683176?s=400&u=864097615ff093d54d380d2d7d9d36bc0aebf60b&v=4" width = "200" />](https://github.com/kyle-richardson) | [<img src="https://avatars1.githubusercontent.com/u/153847?s=400&u=9ce092b1023143bff17fd34191c0768a1f8fe5ea&v=4" width = "200" />](https://github.com/PaulMEdwards) | [<img src="https://avatars2.githubusercontent.com/u/52682445?s=400&u=158e754213409df82f96c0f9f9a52821e9c81d1d&v=4" width = "200" />](https://github.com/Aaroneld) | [<img src="https://avatars3.githubusercontent.com/u/12500686?s=400&u=9ab949e147ba9fe8c58fe50a891c3daf8dcd21b4&v=4" width = "200" />](https://github.com/bvneilson) | [<img src="https://avatars2.githubusercontent.com/u/50844285?s=400&u=7ffa88c4c221bf888b1771fec72530ac156d90c6&v=4" width = "200" />](https://github.com/patrick-replogle) |[<img src="https://files.slack.com/files-pri/T4JUEB3ME-F0132C3TC00/20191205_000916.jpg" width = "200" />](https://twitter.com/lealitos) |
|                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kyle-richardson)                                       |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/PaulMEdwards)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Aaroneld)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bvneilson)                           |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/patrick-replogle)                            |  [<img src="https://twitter.com/favicon.ico" width="15"> ](https://twitter.com/lealitos)                            |
|                      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://linkedin.com/in/kyle-m-richardson)                       |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/paulmedwards/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/aaron-merrifield-234477195/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brennanneilson/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/patrick-replogle-409a92193/)                |               [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/miguel-leal-6b6905168/)            |

<br>
<br>

[![Maintainability](https://api.codeclimate.com/v1/badges/217cf613842592864005/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/neighborhood-chef-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/217cf613842592864005/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/neighborhood-chef-fe/test_coverage)
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/8R1xwujU/neighborhood-chef)

[Product Canvas](https://www.notion.so/Release-Canvas-1-c0e04ce1aaa74365ac00241a3f548a46)

[UX Design files](https://www.figma.com/file/j9n4cIYqv2hLp0bdBGVGt3/Neighborhood-Chef?node-id=0%3A1)

Neighborhood Chef provides a uniquely intimate approach to social culinary gatherings, allowing for both the creation and attending of culinary events in your neighborhood.

### Key Features

- Culinary event creation
- join/RSVP open events

## Tech Stack

### Front end built using:

#### React

- embraces javascript-based programming
- interacts with DOM via JSX
- supports immutability that Redux enforces

#### Redux

- provides immutability in state management for reliability
- allows for scalability of application
- provides a structured workflow of state management

#### Front end deployed using AWS Amplify

#### [Back end](https://github.com/Lambda-School-Labs/neighborhood-chef-be) built using:

#### NodeJS/ExpressJS

- embraces javascript-based programming
- when grouped with basic middlewares (Helmet, CORS, Compression, Multer, JSON), provides robust server structure
- easily scalable

#### GraphQL Query language

- simple, easy to read queries and data retrieval
- very efficient queries
- predictable in what will be provided

#### PostgreSQL Database

- fully capable and diverse with many different index types
- open source source code for visibility
- allows full support for SSL and other security measures
- atomic and consistent

#### Back end deployed using AWS Amplify

# APIs

## Okta Authentication API

  Robust and trusted authentication platform that is easily integrated into React front end as well as NodeJS backend frameworks

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  EXAMPLE_NAME - example description

# Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

 Jest library is sufficient to perform meaningful unit tests for our application, allowing near full test coverage.

# Installation Instructions

`yarn install` or `npm install` to install all necessary dependencies locally.

## Other Scripts
    * start - sets up the development environment and starts a server
    * test - runs tests found within the full application (*.test.js file extensions)
    * build - creates a 'build' directory with the production build of the app
    * eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/neighborhood-chef-be/blob/master/README.md) for details on the backend of our project.
