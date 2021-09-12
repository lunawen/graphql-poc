const { RESTDataSource } = require("apollo-datasource-rest");

class PostAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/posts";
  }

  async getPostById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getPosts() {
    const data = await this.get("/");
    return data;
  }
}

module.exports = PostAPI;
