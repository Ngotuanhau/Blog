<template>
  <v-app class="c-bg-app">
    <v-navigation-drawer v-model="drawer" app v-if="$vuetify.breakpoint.xs"></v-navigation-drawer>
    <v-app-bar @toogle="drawer=!drawer" app></v-app-bar>
    <v-content>
      <v-main-layout></v-main-layout>
      <go-top :size="40" :bottom="150" bg-color="brown" :has-outline="false" :max-width="320"></go-top>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>
<script>
import AppBar from "@/views/Layouts/Header/Toolbar";
import NavigationDrawer from "@/views/components/Drawer";
import MainLayout from "@/views/Layouts/MainLayout/MainLayout";
import Footer from "@/views/Layouts/Footer/footer";
import GoTop from "@inotom/vue-go-top";

export default {
  name: "App",
  components: {
    GoTop,
    vAppBar: AppBar,
    vNavigationDrawer: NavigationDrawer,
    vMainLayout: MainLayout,
    vFooter: Footer
  },
  props: {
    source: String
  },
  data() {
    return {
      drawer: null,
      left: null
    };
  }
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.c-bg-app {
  background-color: $main-bg-color_1;
}
</style>
