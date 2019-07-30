<template>
  <v-container fluid mt-6>
    <router-view></router-view>
  </v-container>
</template>

<script>
import Breadcrumbs from "@/views/components/Breadcrumbs/breadcrumbs";

export default {
  components: {
    Breadcrumbs
  }
};
</script>

<style scoped>
</style>
