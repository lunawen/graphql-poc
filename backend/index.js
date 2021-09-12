// index.js
const { ApolloServer, gql } = require("apollo-server");

// in-memory db
const data = {
  posts: [
    {
      id: "xyz-1",
      content: "First Post",
    },
    {
      id: "xyz-2",
      content: "Second Post",
    },
    {
      id: "xyz-3",
      content: "Random Post",
    },
  ],
};

// define schema (query, mutation, objects) based on db and use case
const schema = gql`
  type Query {
    posts: [Post]
    postById(id: String!): Post
  }

  type Post {
    id: ID!
    content: String!
  }
`;

// define resolvers (hook up db and schema)
var resolvers = {
  Query: {
    posts: (parent, args) => {
      return data.posts;
    },
    postById: (parent, args) => {
      return data.posts.filter((p) => p.id === args.id);
    },
  },
};

// create server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
});

// define port
server.listen(4001).then(({ url }) => {
  console.log("API server running at http://localhost:4001");
});
