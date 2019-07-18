<template>
  <v-layout>
    <span class="sp_content">Content</span>
    <v-vue-editor></v-vue-editor>
  </v-layout>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    value: ""
  },

  components: {
    vVueEditor: VueEditor
  }
};
</script>

<style scoped>
.layout {
  display: block;
}
</style>
