# Objective

Frontend: Vue + Apollo Client
Backend: Apollo server + mock RESTful API

# Run Backend

http://localhost:4001

```shell
cd backend
npm i
# make sure json-server is also running
json-server --watch data/db.json
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

Ref: https://www.npmjs.com/package/json-server

```shell
npm install -g json-server
json-server --watch backend/data/db.json
```
