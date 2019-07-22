<template>
  <v-app class="brown lighten-5">
    <v-container>
      <Header @toogle="drawer=!drawer" />
      <Drawer v-model="drawer" v-if="$vuetify.breakpoint.xs" />
      <MainLayout />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Header: () => import("@/views/Layouts/Header/Toolbar"),
    Drawer: () => import("@/views/components/Drawer"),
    MainLayout: () => import("@/views/Layouts/MainLayout/MainLayout"),
    Footer: () => import("@/views/Layouts/Footer/footer")
  },
  props: {
    source: String
  },
  data() {
    return {
      drawer: false,
      left: null
    };
  }
};
</script>

<style scoped>
.style_background {
  background-color: #efebe9;
}
</style>
