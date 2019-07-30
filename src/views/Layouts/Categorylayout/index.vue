<template>
  <v-layout mt-5 row wrap>
    <v-flex v-for="(item, index) in object_types" :key="index" xs12 md6 lg3>
      <v-card
        :to="{name:'object_types',params:{slug:item.slug},query:{title:item.title}}"
        class="ma-2 c-card"
      >
        <v-img
          :src="`https://cosmic-s3.imgix.net/${item.metafields[0].value}`"
          height="250px"
          class="c-image"
        >
          <v-flex class="middle">
            <span class="display-2 c-text">{{item.title}}</span>
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

<style lang="scss">
@import "../../../styles/main.scss";

.c-card {
  border-radius: 10px;
}
.c-card:hover .c-image {
  opacity: 0.7;
}
.c-card:hover .middle {
  opacity: 1;
}
.c-image {
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
.c-text {
  color: $text-color-2;
}
</style>

