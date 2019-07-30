<template>
  <!-- color="brown lighten-4" -->
  <v-app-bar class="c-bg-toolbar" absolute>
    <!-- <v-app-bar-nav-i con  @click.stop="$emit('toogle')"></v-app-bar-nav-icon> -->
    <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="$emit('toogle')"></v-app-bar-nav-icon>
    <v-spacer class="hidden-sm-and-up"></v-spacer>
    <v-toolbar-title>
      <router-link class="c-text" to="/">
        <span class="font-weight-regular display-1 font-italic px-4">EAT & GO</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn text class="c-btn">
        <router-link to="/" class="c-text">Home</router-link>
      </v-btn>
      <v-menu open-on-hover left offset-y transition="scroll-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn class="c-text" text v-on="on">Categories</v-btn>
        </template>
        <v-list class="c-menudrop">
          <v-list-item
            v-for="(item, index) in object_types"
            :key="index"
            :to="{name:'object_types', params: {slug:item.slug}, query: {title:item.title}}"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <v-btn
        color="brown lighten-1"
        v-for="(item, index) in object_types"
        :key="index"
        :to="{name:'object_types', params:{slug:item.slug}, query:{title:item.title}}"
        flat
      >
        <span>{{item.title}}</span>
      </v-btn>-->
      <!-- <v-menu open-on-hover left offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="brown lighten-1" flat v-on="on">Admin</v-btn>
        </template>
        <v-list class="brown lighten-5">
          <v-btn flat color="brown lighten-1" to="/listObjectType">Object Type</v-btn>
          <v-btn flat color="brown lighten-1" to="/listObject">Object</v-btn>
        </v-list>
      </v-menu>-->
      <v-btn class="c-btn" text>
        <v-icon>bell-alert</v-icon>
        <router-link to="/login" v-if="!isAuthenticated" class="c-text">Login</router-link>
        <a href="#" v-if="isAuthenticated" @click="logout" class="c-text">Logout</a>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
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

<style lang="scss" scoped>
@import "../../../styles/main.scss";

.c-bg-toolbar {
  background-color: $main-bg-color-3;
}
.c-btn {
  color: $text-color-1;
}
.c-text {
  text-decoration: none;
  color: $text-color-1;
}
.c-menudrop {
  background-color: $main-bg-color-4;
}
</style>
