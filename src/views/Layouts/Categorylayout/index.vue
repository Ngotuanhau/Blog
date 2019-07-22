<template>
  <v-layout mt-5 row wrap>
    <v-flex v-for="(item, index) in object_types.object_types" :key="index" xs12 md3>
      <v-card
        :to="{name:'object_types',params:{slug:item.slug},query:{title:item.title}}"
        class="ma-2 style_card"
      >
        <v-img
          :src="`https://cosmic-s3.imgix.net/${item.metafields[0].value}`"
          height="250px"
          class="style_image"
        >
          <v-flex class="pa-3">
            <span class="headline white--text">{{item.title}}</span>
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
.style_image {
  opacity: 0.8;
}
</style>
