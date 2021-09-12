const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    posts: [Post]
    postById(id: String!): Post
  }

  type Post {
    id: ID!
    content: String!
  }
`;
