module.exports = {
  posts: (_, __, { dataSources }) => {
    return dataSources.postAPI.getPosts();
  },
  postById: (_, { id }, { dataSources }) => {
    return dataSources.postAPI.getPostById(id);
  },
};
