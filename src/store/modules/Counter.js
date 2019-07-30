const state = {
    counter: 0
};

const getters = {
    counter: state => state.counter
};

const mutations = {
    increment: state => state.counter++
};

export default {
    state,
    getters,
    mutations
};