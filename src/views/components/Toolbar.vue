<template>
  <v-toolbar color="grey lighten-5" height="75px" app class="style_toolbar">
    <!-- <v-toolbar-side-icon class="btn_toogle" @click="$emit('toogle')"></v-toolbar-side-icon> -->
    <v-toolbar-title>EAT & GO</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>
        <router-link to="/login" v-if="!isAuthenticated" class="btn_login">Login</router-link>
        <a href="#" v-if="isAuthenticated" @click="logout" class="btn_login">Logout</a>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
/* .btn_toogle {
  color: #263238;
}
.btn_menu {
  color: #263238;
  text-decoration: none;
}
.v-toolbar__items {
  align-items: center;
}
.btn_login,
.btn_create {
  color: #263238;
  text-decoration: none;
} */
</style>
