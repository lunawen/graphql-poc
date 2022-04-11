# Objective

A simple POC to demonstrate an end-to-end graphql data flow.

- Frontend: Vue + Apollo Client
- Backend: Apollo server + mock RESTful API

# Run Backend

http://localhost:4001

```shell
cd backend
npm i
# install json-server if you haven't
npm i -g json-server
# make sure json-server is also running
json-server --watch data/db.json --port 3000
npm run start
```

# Run Frontend

http://localhost:8080

```shell
cd frontend
npm i
npm run serve
```

# Mock RESTful API

http://localhost:3000

Ref: https://www.npmjs.com/package/json-server

```shell
npm install -g json-server
json-server --watch backend/data/db.json
```
