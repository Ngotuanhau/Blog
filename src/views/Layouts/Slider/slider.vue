<template>
  <v-carousel flat hide-delimiters>
    <v-carousel-item v-for="(item,index) in image_slide.media" :key="index" :src="item.url"></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";

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
      axios
        .get(
          "https://api.cosmicjs.com/v1/blog-post/media?folder=slider-image&pretty=true&limit=20"
        )
        .then(response => {
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
