<template>
  <v-container>
    <v-layout>
      <span
        class="display-2 text-uppercase font-weight-bold mx-auto black mt-5"
        style="color:white; text-align:center"
      >{{$route.query.title}}</span>
    </v-layout>
    <v-layout v-for="(item, index) in objects.objects" :key="index" column>
      <v-flex class="mt-4 white">
        <v-card flat class="ma-4">
          <router-link :to="'/object/'+ item.slug">
            <v-img :src="item.metadata.image.url" aspect-ratio="1.75"></v-img>
          </router-link>
          <v-flex pa-3 class="card_auth">
            <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
            <div>
              <span style="color:#a1887f">{{item.metadata.author.title}}</span>
              <v-spacer></v-spacer>
              <span style="color:#a1887f">{{item.created_at|moment('MMMM Do YYYY')}}</span>
            </div>
          </v-flex>
          <v-card-title>
            <router-link
              :to="'/object/'+ item.slug"
              class="headline font-weight-medium"
              style="text-decoration:none; color:#a1887f"
            >{{item.title}}</router-link>
          </v-card-title>
          <v-divider light></v-divider>
          <v-card-actions class="px-4">
            <v-flex>
              <span class="grey--text mr-3">0 view</span>
            </v-flex>
            <v-btn flat icon color="red">
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
        .get(
          `https://api.cosmicjs.com/v1/blog-post/objects?type=${this.$route.params.slug}`
        )
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

<style scoped>
.card_auth {
  display: flex;
  align-items: center;
}
</style>
