module.exports = {
  posts: (parent, args, { dataSources }, info) => {
    return dataSources.postAPI.getPosts();
  },
  postById: (parent, { id }, { dataSources }, info) => {
    return dataSources.postAPI.getPostById(id);
  },
};
