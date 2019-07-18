<template>
  <v-app id="inspire">
    <v-container class="style_view">
      <v-content>
        <router-view />
        <v-go-top :size="40" bg-color="brown"></v-go-top>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import GoTop from "@inotom/vue-go-top";
import Drawer from "@/views/components/Drawer";
import Toolbar from "@/views/components/Toolbar";

export default {
  components: {
    vDrawer: Drawer,
    vToolBar: Toolbar,
    vGoTop: GoTop
  },
  data() {
    return {
      drawer: true,
      right: null,
      left: null
    };
  }
};
</script>

<style scoped>
/* .white--text {
  padding: 0 24px;
  color: #263238;
} */
/* .text_footer {
  color: black;
} */
/* .v-content {
  align-items: center;
} */
.style_view {
  background-color: #efebe9;
}
</style>
