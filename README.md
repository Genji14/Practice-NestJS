<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS App - User Management (Convert From ExpressJS)

## Features 

- Search Users
- Add User
- Update User
- Delete User

### Run Application 

- Install Dependency Packages.

```
    cd nestjs-course
    yarn
```


- Start the NestJS project.

```
  yarn start
```

### Search Users - Method GET

```
    localhost:3000/users/search
```

- With Search Queries in this example:

```

  params: {
    "username": "anle",
    "fullname": "Le Dang Hoang An",
    "role": "Developer",
    "projects": ["D&D", "Tiger"],
    "activeYn": "Y"
  }

```

- The Response: 

```

  {
    statusCode: 200,
    data: [*{Users are found}*]
  }

```

### Add User - Method POST

```
    localhost:3000/users/insert
```

- Insert the require and validate value in body of request like this example:


```

  body: {
    "username": "anle",
    "fullname": "Le Dang Hoang An",
    "role": "Developer",
    "projects": ["D&D", "Tiger"],
    "activeYn": "Y"
  }

```

- The Response When Success: 

```

  {
    statusCode: 201,
    data: "Create user successfully !!"
  }

```

- The Response When Request has Invalid value: 

```

  {
    statusCode: 400,
    data: " *{Messages of validation}* "
  }

```

- The Response When Username is existed: 

```

  {
    statusCode: 400,
    data: "User is existed"
  }

```

### Edit User - Method PATCH

```
    localhost:3000/users/:username
```

- With the params is username that user want to update. For example:


```
  param: anle // Edit at username anle.
```

- Then parse the body has changed properties and validate value like create user:


```

  body: {
    "username": "phatvo",
    "fullname": "Vo Phu Phat",
    "activeYn": "N"
  }

```

- The Response When Success: 

```

  {
    statusCode: 204,
    data: "Update user successfully !!"
  }

```

- The Response When Request has Invalid value: 

```

  {
    statusCode: 400,
    data: " *{Messages of validation}* "
  }

```

- The Response When Username isn't existed:

```

  {
    statusCode: 404,
    data: "User not found"
  }

```


### Delete User

Delete User - Method DELETE

```
    localhost:5000/users/:username
```

- With the params is username that user want to delete. For example:


```
  param: phatvo // Delete user have username phatvo.
```

- The Response When Success: 

```

  {
    statusCode: 204,
    data: "Delete user successfully !!"
  }

```

- The Response When Username isn't existed:

```

  {
    statusCode: 404,
    data: "User not found"
  }

```
