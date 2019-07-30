import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi",
        values: {
            like: "mdi-cards-heart",
            person: "mdi-account-circle",
            comment: "mdi-comment-text-outline",
            facebook: "mdi-facebook",
            instagram: "mdi-instagram",
            google: "mdi-google",
            twitter: "mdi-twitter"
        }
    }
});