import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueKinesis from 'vue-kinesis'
import "./assets/styles/index.css";

Vue.use(VueKinesis)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


