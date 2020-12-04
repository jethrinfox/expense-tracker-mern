# lol Expense Tracker with Auth

#### Includes server node server for api functions

## Table of contents

-   [Introduction](#Introduction)
-   [Technologies](#Technologies)
-   [Setup](#Setup)
-   [Functionality](#Functionality)

### Introduction

This is a React expense tracker app with an included NodeJS server API. You can keep track of your expenses and earnings in a simple way with secure authentication. You can create an account and then input the data in a simple form. React useContext hook keeps track of the user data like "user-id" to send requests to the server and retrieve all the "transactions" saved under that user id.

## Technologies

-   ReactJS
-   Axios
-   NodeJS
-   Express
-   MongoDB (mongoose)
-   Passport (local auth strategy)

## Setup

First I'm gonna assume that you have some instance of MongoDB running.
If that's not the case you can create one for free in [Atlas](https://www.mongodb.com/cloud/atlas).

#### Clone the repo

```
git clone https://github.com/jethrinfox/expense-tracker-mern

cd expense-tracker-mern
```

#### Install dependencies on Backend

```
cd server/

yarn
```

#### Then navigate back to the root directory and do the same

```
cd ..

yarn
```

#### You can run it in dev mode to enable nodemon in the server folder

```
yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

React automatically proxies request to the configured server port
If you change the server port you can modify this in the `package.json` of the root directory

## Functionality

Not a very complex project but is expandable for added functionality, it implements PassportJS local strategy but obviously, other strategies can be added like `auth0`.

-   Signup using a name, email, and password
-   Log in using your email and password
-   Create, Read, Update, and Delete using the ReactJS frontend
-   Store a "transaction" description, amount, category, and date
