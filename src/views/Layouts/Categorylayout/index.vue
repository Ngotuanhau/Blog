<template>
  <v-layout mt-5 row wrap>
    <v-flex v-for="(item, index) in object_types" :key="index" xs12 md3>
      <v-card
        :to="{name:'object_types',params:{slug:item.slug},query:{title:item.title}}"
        class="ma-2 style_card"
      >
        <v-img
          :src="`https://cosmic-s3.imgix.net/${item.metafields[0].value}`"
          height="250px"
          class="style_image"
        >
          <v-flex class="pa-2 middle">
            <span class="display-2 style_text">{{item.title}}</span>
          </v-flex>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      image_cate: []
    };
  },

  created() {
    this.get_object_types();
  },

  computed: {
    ...mapGetters(["object_types"])
  },

  methods: {
    ...mapActions(["get_object_types"])
  }
};
</script>

<style scoped>
.style_card {
  border-radius: 10px;
}
.style_card:hover .style_image {
  opacity: 0.7;
}
.style_card:hover .middle {
  opacity: 1;
}
.style_image {
  opacity: 1;
  display: block;
  transition: 0.2s ease;
  backface-visibility: hidden;
}
.middle {
  transition: 0.5s ease;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.style_text {
  color: white;
}
</style>
