<template>
  <v-footer app color="brown lighten-4 py-4 px-5" absolute>
    <v-flex style="color: #8d6e63" md6>
      &copy;{{ new Date().getFullYear() }}
      <strong>Vuetify</strong>
    </v-flex>
    <!-- <v-spacer></v-spacer> -->
    <v-flex class="group_icon" md6>
      <v-btn flat class="style_icon">
        <v-icon color="brown lighten-1">$vuetify.icons.facebook</v-icon>
      </v-btn>
      <v-btn flat class="style_icon">
        <v-icon color="brown lighten-1">$vuetify.icons.google</v-icon>
      </v-btn>
      <v-btn flat class="style_icon">
        <v-icon color="brown lighten-1">$vuetify.icons.twitter</v-icon>
      </v-btn>
      <v-btn flat class="style_icon">
        <v-icon color="brown lighten-1">$vuetify.icons.instagram</v-icon>
      </v-btn>
    </v-flex>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.group_icon {
  display: flex;
  justify-content: flex-end;
}
.style_icon {
  min-width: 15px;
  margin: 6px 0;
}
</style>
