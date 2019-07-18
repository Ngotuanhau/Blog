import axios from "axios";

const state = {
    object_types: [],
    object_type: "",
    status: ""
};

const getters = {
    object_types: state => state.object_types,
    object_type: state => state.object_type
};

const actions = {
    //GET LIST_OBJECT_TYPES---------------------------
    async get_object_types({ commit }) {
        const response = await axios
            .get("https://api.cosmicjs.com/v1/blog-post/object-types")
            .then(response => {
                console.log(response.data.object_types);
                const object_types = response.data;
                commit("SET_OBJECT_TYPES", object_types);
            });
    },

    //ADD OBJECT_TYPES--------------------------------
    async add_object_type({ commit }, object_type) {
        const response = await axios
            .post(
                "https://api.cosmicjs.com/v1/blog-post/add-object-type",
                object_type
            )
            .then(response => {
                console.log(response);
                commit("SET_ADD_OBJECT_TYPE_SUCCESS", object_type);
            })
            .catch(error => {
                console.log(error);
                commit("SET_ADD_OBJECT_TYPE_ERROR", error);
            });
    },

    //DELETE OBJECT_TYPES--------------------------------
    // async delete_object_type({ commit }, slug) {
    //     await axios.delete(
    //         `https://api.cosmicjs.com/v1/project-example-1/object-types/${slug}`
    //     );
    //     commit("SET_REMOVE_OBJECT_TYPE_SUCCESS", slug);
    // },

    //EDIT OBJECT_TYPES----------------------------------
    async edit_object_type({ commit }, slug) {
        await axios.put(
            `https://api.cosmicjs.com/v1/blog-post/edit-object-type/${slug}`
        );
        commit("SET_EDIT_OBJECT_TYPE_SUCCESS", slug);
    }
};

const mutations = {
    SET_OBJECT_TYPES(state, object_types) {
        state.object_types = Object.assign(object_types, state.object_types);
        state.status = "Get Object Types Success";
    },
    SET_ADD_OBJECT_TYPE_SUCCESS(state, object_type) {
        state.object_type = state.object_types.object_types.unshift(object_type);
        state.status = "Add Object Type Success";
    },
    SET_ADD_OBJECT_TYPE_ERROR(state) {
        state.status = "Add Object Type Error";
    }
    // SET_REMOVE_OBJECT_TYPE_SUCCESS(state, slug) {
    //     state.object_types.object_types = state.object_types.object_types.filter(
    //         object_type => object_type.slug !== slug
    //     );
    // },
};

export default {
    state,
    getters,
    actions,
    mutations
};