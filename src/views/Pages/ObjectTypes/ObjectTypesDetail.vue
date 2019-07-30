<template>
  <v-container mt-5>
    <v-layout my-5>
      <span class="display-2 text-uppercase font-weight-bold mx-auto c-text">{{$route.query.title}}</span>
    </v-layout>
    <v-layout v-for="(item, index) in objects.objects" :key="index" column>
      <v-flex class="c-obType-detail">
        <v-card class="ma-5">
          <router-link :to="'/object/'+ item.slug">
            <v-img :src="item.metadata.image.url" aspect-ratio="1.75"></v-img>
          </router-link>
          <v-flex pa-3 class="c-person">
            <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
            <div>
              <span class="c-card-text">{{item.metadata.author.title}}</span>
              <v-spacer></v-spacer>
              <span class="c-card-text">{{item.created_at|moment('MMMM Do YYYY')}}</span>
            </div>
          </v-flex>
          <v-card-title>
            <router-link
              :to="'/object/'+ item.slug"
              class="headline font-weight-medium c-card-text"
            >{{item.title}}</router-link>
          </v-card-title>

          <v-card-actions class="px-4">
            <v-flex>
              <span class="grey--text mr-3">0 view</span>
            </v-flex>
            <v-btn text icon color="red">
              <v-icon>$vuetify.icons.like</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import ObjectItem from "@/views/Pages/Objects/ObjectItem";
import Url from "@/plugins/config";

export default {
  data() {
    return {
      objects: []
    };
  },

  watch: {
    $route(val) {
      console.log(val.params.slug);
      this.getData();
    }
  },

  methods: {
    getData() {
      axios
        .get(`${Url.url_object_types}${this.$route.params.slug}`)
        .then(response => {
          console.log(response);
          this.objects = response.data;
        });
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style lang='scss' scoped>
@import "../../../styles/main.scss";

.c-text {
  background-color: $text-bg-color;
  color: $text-color-2;
  text-align: center;
}
.c-card-text {
  color: $text-color-1;
  text-decoration: none;
}
.c-obType-detail {
  background-color: $main-bg-color-2;
}
.c-person {
  display: flex;
  align-items: center;
}
</style>
