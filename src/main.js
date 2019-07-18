// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
import store from "./store";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(axios);
Vue.use(Vuetify, {
    iconfont: "mdi",
    icons: {
        trash: "mdi-delete-empty",
        pencil: "mdi-pencil",
        create: "mdi-folder-plus-outline",
        categories: "mdi-artstation",
        plusmeta: "mdi-expand-all-outline",
        facebook: "mdi-facebook-box",
        google: "mdi-google-plus",
        like: "mdi-heart-outline",
        twitter: "mdi-twitter-box",
        instagram: "mdi-instagram",
        person: "mdi-account-circle"
    }
});

Vue.config.productionTip = false;

const token = localStorage.getItem("user-token");
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

/* eslint-disable no-new */
new Vue({
    el: "#app",
    store,
    router,
    components: {
        App
    },
    template: "<App/>"
});