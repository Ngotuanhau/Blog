import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "@/plugins/vuetify";
import axios from "axios";
import store from "./store";
import VueMoment from "vue-moment";

Vue.use(VueMoment);
Vue.use(axios);

Vue.config.productionTip = false;

const token = localStorage.getItem("user-token");
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

new Vue({
    el: "#app",
    store,
    router,
    vuetify,
    components: {
        App
    },
    template: "<App/>"
});