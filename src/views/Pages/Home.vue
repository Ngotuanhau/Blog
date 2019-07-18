<template>
  <v-container>
    <v-slider></v-slider>
    <v-catelayout></v-catelayout>
    <v-layout mt-5 row wrap>
      <v-flex v-for="(item, index) in objects.objects" :key="index" d-flex md6>
        <v-object-item :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Slider from "@/views/Layouts/Slider/slider";
import Catelayout from "@/views/Layouts/Categorylayout/index";
import ObjectItem from "@/views/Pages/Object/ObjectItem";

export default {
  components: {
    vSlider: Slider,
    vCatelayout: Catelayout,
    vObjectItem: ObjectItem
  },
  methods: {
    ...mapActions(["get_objects"])
  },
  computed: {
    ...mapGetters(["objects"])
  },
  created() {
    this.get_objects();
  }
};
</script>

<style scoped>
</style>
