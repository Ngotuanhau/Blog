import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Pages/Home";
import Login from "@/views/Authentication/Login";
import Register from "@/views/Authentication/Register";
import ObjectTypes from "@/views/Pages/ObjectTypes/ObjectTypes";
import ObjectTypeDetail from "@/views/Pages/ObjectTypes/ObjectTypesDetail";
import BucketsList from "@/views/Pages/Buckets/BucketsList";
import BucketCreate from "@/views/Pages/Buckets/BucketCreate";
import Objects from "@/views/Pages/Objects/Objects";
import ObjectDetail from "@/views/Pages/Objects/ObjectDetail";

import store from "@/store";
Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [{
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                guest: true
            }
        },
        {
            path: "/",
            component: {
                render: h => h("router-view")
            },
            meta: {
                requiresAuth: true
            },
            children: [{
                    path: "/",
                    name: "Home",
                    component: Home
                },
                {
                    path: "/objectTypes",
                    name: "objectTypes",
                    component: ObjectTypes
                },
                {
                    path: "/object_types/:slug",
                    name: "object_types",
                    component: ObjectTypeDetail
                },
                {
                    path: "/objects",
                    name: "objects",
                    component: Objects
                },
                {
                    path: "/object/:slug",
                    name: "object",
                    component: ObjectDetail
                },
                {
                    path: "/bucketslist",
                    name: "bucketslist",
                    component: BucketsList
                },
                {
                    path: "/bucketcreate",
                    name: "bucketcreate",
                    component: BucketCreate
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({
                path: "/login",
                params: {
                    nextUrl: to.fullPath
                }
            });
            return;
        }
    }
    next();
});

export default router;