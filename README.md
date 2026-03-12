# Backend Nest JS - Todo API

Backend service for a todo application built with NestJS and MongoDB.

It provides:

- user management (`/users`)
- login and JWT token issuing (`/auth/login`)
- todo CRUD operations (`/todos`)
- Swagger API docs (`/api`)

## Tech Stack

- NestJS 11
- TypeScript
- MongoDB + Mongoose
- JWT (`@nestjs/jwt`)
- Swagger (`@nestjs/swagger`)
- Jest (unit + e2e tests)

## Main Features

- Create, read, update, and delete users
- Hash user passwords with `bcrypt`
- Login endpoint returning `access_token`
- Create and manage todo items
- Todo ownership by `authorId` (from JWT payload)
- Swagger UI for endpoint exploration
- CORS enabled for `http://localhost:5173`

## Requirements

- Node.js 20+
- npm 10+
- MongoDB (local or cloud)

## Installation

```bash
npm install
```

## Environment Variables

Create `.env` in project root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo-app
```

Notes:

- `MONGO_URI` is required.
- `PORT` is optional (defaults to `3000`).
- JWT secret is currently hardcoded in `src/auth/auth.module.ts` as `secretKey`.

## Run the Project

```bash
# development
npm run start:dev

# standard start
npm run start

# production build + run
npm run build
npm run start:prod
```

## Available Scripts

- `npm run build` - build app into `dist/`
- `npm run start` - start app
- `npm run start:dev` - start in watch mode
- `npm run start:debug` - start with debugger
- `npm run start:prod` - run compiled app
- `npm run lint` - lint and auto-fix
- `npm run format` - format source files
- `npm run test` - run unit tests
- `npm run test:watch` - run tests in watch mode
- `npm run test:cov` - coverage report
- `npm run test:e2e` - run e2e tests

## API Documentation (Swagger)

After server startup, open:

- `http://localhost:3000/api`

## API Overview

Base URL: `http://localhost:3000`

### Auth

- `POST /auth/login`
  - Body: `{ "name": "string", "password": "string" }`
  - Returns: `{ "access_token": "...", "name": "...", "role": "user|admin" }`

### Users

- `POST /users` - create user
- `GET /users` - list users
- `GET /users/:id` - get user by id
- `PATCH /users/:id` - update user
- `DELETE /users/:id` - delete user

User payload example:

```json
{
  "name": "john",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

### Todos

- `GET /todos` - get todos for current user (requires `Authorization` header)
- `GET /todos/:id` - get todo by id
- `POST /todos` - create todo (requires `Authorization` header)
- `PUT /todos/:id` - update todo
- `DELETE /todos/:id` - delete todo
- `PATCH /todos/:id/toggle` - toggle `completed`

Create todo payload example:

```json
{
  "title": "Buy milk",
  "description": "2 liters"
}
```

Authorization header format:

```http
Authorization: Bearer <access_token>
```

## Quick Start Flow

1. Create a user via `POST /users`.
2. Login via `POST /auth/login` and copy `access_token`.
3. Use token in `Authorization: Bearer <token>` header.
4. Create and fetch todos with `/todos` endpoints.

## cURL Examples

Create user:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name":"john",
    "email":"john@example.com",
    "password":"123456",
    "role":"user"
  }'
```

Login:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"name":"john","password":"123456"}'
```

Create todo (replace `<TOKEN>`):

```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"title":"Buy milk","description":"2 liters"}'
```

Get my todos:

```bash
curl -X GET http://localhost:3000/todos \
  -H "Authorization: Bearer <TOKEN>"
```

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# coverage
npm run test:cov
```

## Project Structure

```text
src/
  auth/      # login and token issuing
  users/     # users CRUD and schema
  todos/     # todos CRUD and schema
  main.ts    # app bootstrap + CORS + Swagger
  app.module.ts
```

## Notes and Limitations

- `GET /todos` and `POST /todos` use decoded JWT payload to determine `authorId`.
- JWT token is decoded in service code and not fully guarded by Passport strategy.
- Consider moving JWT secret to `.env` for production safety.

## License

UNLICENSED
