<template>
  <v-app id="inspire">
    <v-container class="style_view">
      <v-content>
        <router-view />
        <go-top :size="40" :bottom="150" bg-color="brown" :has-outline="false" :max-width="320"></go-top>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import GoTop from "@inotom/vue-go-top";
// import Drawer from "@/views/components/Drawer";
// import Toolbar from "@/views/components/Toolbar";

export default {
  components: {
    // vDrawer: Drawer,
    // vToolBar: Toolbar,
    GoTop
  }
  // data() {
  //   return {
  //     drawer: true,
  //     right: null,
  //     left: null
  //   };
  // }
};
</script>

<style scoped>
.style_view {
  background-color: #efebe9;
}
</style>
