const { ApolloServer } = require("apollo-server");
const PostAPI = require("./datasources/posts");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const dataSources = () => ({
  postAPI: new PostAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen(4001).then(() => {
  console.log("API server running at https://localhost:4001");
});
