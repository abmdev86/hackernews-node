# Hacker News Clone

This is built following the [GraphQL Tutorial](https://www.howtographql.com/graphql-js/0-introduction/) with javascript and Apollo server.

## Stack

- [Node.js](https://nodejs.org/en/)
- [apollo-server](https://www.apollographql.com/)
  A fast and simple GraphQL server library built on top of [Express](https://expressjs.com/).
  Out of the box support for GraphQL Subs and GraphQL Playground.
- [Prisma](https://www.prisma.io/)
Resolvers from GraphQL are implemented with Prisma. The Prisma client is responsible for database access.
- [SQLite](https://www.sqlite.org/index.html)
Database used to store data types.

## Installation

1.  Fork the project to your own repo.
2.  Install the dependencies by running:

```bash
npm install
```

3.  In your Terminal go to the root directory of the project 'hacker-news-node' and start the app by running

```bash
node src/index.js
```

4.  Open a web browser and navigate to http://localhost:4000/
