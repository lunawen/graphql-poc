import Vue from "vue";
import App from "./App.vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  uri: "http://localhost:4001",
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// use middleware
Vue.use(VueApollo);

new Vue({
  render: (h) => h(App),
  // inject apolloClient here like vue-router or vuex
  apolloProvider,
}).$mount("#app");
