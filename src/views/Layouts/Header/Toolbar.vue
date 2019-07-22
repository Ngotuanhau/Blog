<template>
  <v-toolbar color="brown lighten-4" absolute flat>
    <v-toolbar-side-icon class="hidden-sm-and-up btn_toogle" @click="$emit('toogle')"></v-toolbar-side-icon>
    <v-spacer class="hidden-sm-and-up"></v-spacer>
    <v-toolbar-title class="ma-0">
      <router-link style="text-decoration: none; color:#8d6e63; margin:0" to="/">EAT & GO</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat color="brown lighten-1">
        <router-link to="/" class="btn_login">Home</router-link>
      </v-btn>
      <v-menu open-on-hover left offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="brown lighten-1" flat v-on="on">Categories</v-btn>
        </template>
        <v-list class="brown lighten-5">
          <v-list-tile
            v-for="(item, index) in object_types.object_types"
            :key="index"
            :to="{name:'object_types',params:{slug:item.slug},query:{title:item.title}}"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover left offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="brown lighten-1" flat v-on="on">Admin</v-btn>
        </template>
        <v-list class="brown lighten-5">
          <v-btn flat color="brown lighten-1" to="/listObjectType">Object Type</v-btn>
          <v-btn flat color="brown lighten-1" to="/listObject">Object</v-btn>
        </v-list>
      </v-menu>
      <v-btn flat color="brown lighten-1">
        <router-link to="/login" v-if="!isAuthenticated" class="btn_login">Login</router-link>
        <a href="#" v-if="isAuthenticated" @click="logout" class="btn_login">Logout</a>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },

    ...mapGetters(["object_types"])
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },

    ...mapActions(["get_object_types"])
  },

  created() {
    this.get_object_types();
  }
};
</script>

<style scoped>
.btn_login,
.btn_toogle {
  text-decoration: none;
  color: #8d6e63;
}
</style>
