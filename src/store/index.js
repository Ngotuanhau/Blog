import Vuex from "vuex";
import Vue from "vue";
import ObjectTypes from "./modules/ObjectTypes";
import Object from "./modules/Object";
import Authentication from "./modules/Authentication";
import Buckets from "./modules/Buckets";
import Counter from "./modules/Counter";
// import Categories from "./modules/Categories";

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        ObjectTypes,
        Authentication,
        Buckets,
        Object,
        Counter
        // Categories
    }
});