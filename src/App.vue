<template>
  <v-app class="style_background">
    <v-container>
      <Header />
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
    MainLayout: () => import("@/views/Layouts/MainLayout/MainLayout"),
    Footer: () => import("@/views/Layouts/Footer/footer")
  },
  props: {
    source: String
  }
};
</script>

<style scoped>
.style_background {
  background-color: #efebe9;
}
</style>
