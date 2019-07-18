import axios from "axios";

const state = {
    token: localStorage.getItem("user-token") || "",
    status: "",
    user: {}
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
};

const actions = {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit("AUTH_REQUEST");
            axios
                .post("https://api.cosmicjs.com/v1/authenticate", user)
                .then(response => {
                    console.log(response);
                    const token = response.data.token;
                    const user = response.data.user;
                    localStorage.setItem("user-token", token);
                    axios.defaults.headers.common["Authorization"] = token;
                    commit("AUTH_SUCCESS", token, user);
                    resolve(response);
                })
                .catch(error => {
                    commit("AUTH_ERROR", error);
                    localStorage.removeItem("user-token");
                    reject(error);
                });
        });
    },

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit("AUTH_LOGOUT");
            localStorage.removeItem("user-token");
            delete axios.defaults.headers.common["Authorization"];
            resolve();
        });
    }
};

const mutations = {
    AUTH_REQUEST: state => {
        state.status = "loading";
    },
    AUTH_SUCCESS: (state, token, user) => {
        state.status = "success";
        state.token = token;
        state.user = user;
    },
    AUTH_ERROR: state => {
        state.status = "errror";
    },
    AUTH_LOGOUT: state => {
        state.status = "";
        state.token = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};