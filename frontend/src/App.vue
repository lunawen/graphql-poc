<template>
  <div id="app">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

const posts_gql = gql`
  query getPosts {
    posts {
      id
      content
    }
  }
`;

export default {
  name: "App",
  data: function() {
    return {
      // posts here is the data in Vue component (must be the same name as apollo)
      // Having the same name is how the posts state can be synced to the posts query’s result.
      posts: [],
    };
  },
  apollo: {
    // posts is the return data key
    // posts_gql is the query we defined
    posts: posts_gql,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
