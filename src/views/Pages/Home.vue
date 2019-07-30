<template>
  <v-container mt-5>
    <v-layout mt-5>
      <v-flex>
        <v-slider></v-slider>
        <v-catelayout></v-catelayout>
        <v-object-item></v-object-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Slider from "@/views/Layouts/Slider/slider";
import Catelayout from "@/views/Layouts/Categorylayout/index";
import ObjectItem from "@/views/Pages/Objects/ObjectItem";

export default {
  components: {
    vSlider: Slider,
    vCatelayout: Catelayout,
    vObjectItem: ObjectItem
  },

  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss">
</style>
