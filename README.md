# Darkmira Challenge - React JS Position

Developed by: Kilderson Sena ([@dersonsena](https://github.com/dersonsena))

In this project you'll be able to run an online car sales shop, using [React](https://reactjs.org) + [Material UI](https://material-ui.com) to build the entire frontend and all storage made by [Firebase](https://firebase.google.com) with Firestore.

## Home Page

![HomePage1](/docs/screenshot-1.png)

![HomePage1](/docs/screenshot-2.png)

![HomePage1](/docs/screenshot-4.png)

## Admin

![HomePage1](/docs/screenshot-3.png)

### Internacionalization

I developed an internationalization layer in the project to improve the UX of foreign users. The way it was designed, it is very easy to add new languages for application.

![GitFlow](/docs/screenshot-5.png)

![GitFlow](/docs/screenshot-6.png)

## Prerequisites

It is mandatory requirement to run this project:

- Node.js v10+
- Yarn 1.22+

## Installation

### Repository Clone

Open your terminal and clone this project:

```bash
$ git clone git@github.com:dersonsena/darkmira-carsale.git
```

### `.env` file

Enter the project directory and make a copy of `.env.example` renaming it to` .env` and fill in the environment variables:

```bash
$ cd darkmira-carsale
$ cp .env.example .env
``` 

As it is sensitive data and necessary to run the application, Firebase access data will be sent by email.

### Install Dependencies

Run the command below to install the project dependencies:

```bash
$ yarn install
```

> **NOTE:** you can also use `npm` to install packages, however, `yarn` was used during the development process

### Run Application

Finally run the command below to run application:

```bash
yarn start
```

When executing this command, the output below should appear on your terminal:

```bash
Compiled successfully!

You can now view darkmira-carsale in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://<Your Ip Address>:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Now, just go to your browser and type `http://localhost:3000`.

## Flows and Standards used

### Create React App Boilerplate + Typescript

In this project the boilerplate recommended by the maintainers of the tool was used using the CLI script called [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) with typed superset of JavaScript called by [Typescript](https://www.typescriptlang.org)

### ESLinter + Prettier

In this project, [ESLint](https://eslint.org) was used with [Prettier](https://prettier.io) for better code standardization. If someone happens to be part of the project development team, they will have to follow it.

### CommitLint

In this project, [CommitLinter](https://commitlint.js.org) was used in order to standardize also the commit messages of this project. 

### GitFlow

The GitFlow convention was used to organize the branches. The branches can be seen here in the repository as illustrated below:

![GitFlow](/docs/branches.png)

### Milestones

The Github milestone system was used to organize all the issues necessary for the development of the project. You can see all the milestones [Clicking Here](https://github.com/dersonsena/darkmira-carsale/milestones?state=closed).

### Tag

I used a convention that each milestone reached would be a new release of the application. Then, for each milestone reached, a tag was created. To see all releases [Click Here](https://github.com/dersonsena/darkmira-carsale/releases)