<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,index) in image_slide.media"
      :key="index"
      :src="item.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";
import Url from "@/plugins/config";

export default {
  data() {
    return {
      image_slide: []
    };
  },

  created() {
    this.get_image_slide();
  },

  methods: {
    get_image_slide() {
      axios.get(Url.url_slider_image).then(response => {
        // console.log(response);
        this.image_slide = response.data;
        // console.log(this.image_slide);
      });
    }
  }
};
</script>

<style>
</style>
