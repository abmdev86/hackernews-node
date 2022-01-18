const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { getUserId } = require('./utils');
const { PubSub } = require('apollo-server');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Subscription = require('./resolvers/Subscription');
const Vote = require('./resolvers/Vote');

const pubsub = new PubSub();
const prisma = new PrismaClient({
  errorFormat: 'minimal'
});

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId:
        req && req.headers.authorization ? getUserId(req) : null,
    };
  },
  subscriptions: {
    onConnect: (connectionParams) => {
      if (connectionParams.authToken) {
        return {
          prisma,
          userId: getUserId(null, connectionParams.authToken)
        };
      } else {
        return {
          prisma
        };
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});