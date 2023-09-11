
This repository contains a frontend and a backend folder. This means that each folder is a complete environment (`package.json`, `/node_modules`). They are completely independent. You cannot reference code from one environment in the other environment.

### The Frontend

1. Open a terminal in VS Code
2. Type `cd frontend`
3. Type `yarn install`

Use `yarn dev:frontend` to start the frontend dev environment.

### The Backend

1. Open _another_ terminal in VS Code
2. Type `cd backend`
3. Type `yarn install`

Use `yarn dev:backend` to start the backend dev environment.

## File Structure

```
├── _screenshots
├── backend
    ├── data
    |   └── users.js (where our data is stored)
    ├── node_modules (where all external dependencies are saved)
    |   ├── ...
    |   └── ...
    ├── handlers.js (functions that are called by the endpoints)
    ├── package.json (where we keep a record of the app setup)
    ├── server.js
    ├── utils.js (utility functions used by the BE)
    └── yarn.lock ("locks" the dependency versions)
├── frontend
    ├── public
    ├── src
    ├── node_modules (where all external dependencies are saved)
    |   ├── ...
    |   └── ...
    ├── package.json (where we keep a record of the app setup)
    └── yarn.lock ("locks" the dependency versions)
├── .gitignore
├── .prettierrc
└── README.md (this file)
```

## About the Data

There is a file `backend/data/users.js` that contains an array of `user`s. Each user looks like this.

```js
{
  id: '1008',
  name: 'Fletcher',
  friends: ['1006', '1007', '1009'], // array of the ids of user's friends
  avatarUrl: '/images/profile-pics/000003.jpg',
},
```

