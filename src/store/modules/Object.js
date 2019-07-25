import axios from "axios";

const state = {
    objects: [],
    object: "",
    status: ""
};

const getters = {
    objects: state => state.objects,
    object: state => state.object
};

const actions = {
    //GET OBJECTS LIST--------------------------------------------
    async get_objects({ commit }) {
        const response = await axios
            .get(
                "https://api.cosmicjs.com/v1/blog-post/objects?pretty=true&sort=-created_at"
            )
            .then(response => {
                // console.log(response.data);
                let objects = response.data.objects.filter(
                    item => item.type_slug !== "authors"
                );
                console.log(objects);
                commit("SET_OBJECTS_SUCCESS", objects);
            });
    },

    //ADD OBJECT---------------------------------------------------
    async add_object({ commit }, object) {
        const response = await axios
            .post("https://api.cosmicjs.com/v1/blog-post/add-object", object)
            .then(response => {
                console.log(response);
                commit("SET_ADD_OBJECT_SUCCESS", object);
            })
            .catch(error => {
                commit("SET_ADD_OBJECT_ERROR".error);
            });
    }
};

const mutations = {
    SET_OBJECTS_SUCCESS(state, objects) {
        state.objects = Object.assign(objects, state.objects);
        state.status = "Set objects list success";
    },
    SET_ADD_OBJECT_SUCCESS(state, object) {
        state.object = state.objects.unshift(object);
        state.status = "Add object success";
    },
    SET_ADD_OBJECT_ERROR(state) {
        state.status = "Add object error";
    }
};

export default { state, getters, actions, mutations };