import axios from "axios";

const state = {
    buckets: [],
    bucket: "",
    status: ""
};

const getters = {
    list_buckets: state => state.buckets
};

const actions = {
    //GET BUCKETS LIST----------------------------
    async get_buckets_list({ commit }) {
        const response = await axios
            .get("https://api.cosmicjs.com/v1/buckets")
            .then(response => {
                console.log(response.data);
                commit("SET_BUCKETS_LIST", response.data);
            });
    },

    //ADD BUCKET-----------------------------------
    async add_bucket({ commit }, bucket) {
        const response = await axios
            .post("https://api.cosmicjs.com/v1/buckets", bucket)
            .then(response => {
                console.log(response.data);
                commit("SET_ADD_BUCKET_SUCCESS", response.data);
            })
            .catch(error => {
                commit("SET_ADD_BUCKET_ERROR", error);
            });
    }
};

const mutations = {
    SET_BUCKETS_LIST(state, buckets) {
        state.buckets = Object.assign(buckets, state.buckets);
        state.status = "Add buckets list success";
    },
    SET_ADD_BUCKET_SUCCESS(state, bucket) {
        state.buckets = Object.assign(bucket, state.buckets.unshift(bucket));
        state.status = "Add bucket success";
    },
    SET_ADD_BUCKET_ERROR(state) {
        state.status = "Add bucket error";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};