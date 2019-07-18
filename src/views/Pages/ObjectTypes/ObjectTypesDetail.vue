<template>
  <v-container>
    <v-layout v-for="(item, index) in objects.objects" :key="index" column>
      <span class="style_title">{{item.type_slug}}</span>
      <v-flex class="mt-5 style_content">
        <v-card flat class="ma-5">
          <router-link :to="'/object/'+ item.slug">
            <v-img :src="item.metadata.image.url" aspect-ratio="1.75"></v-img>
          </router-link>
          <v-flex pa-3 class="card_auth">
            <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
            <span class="text_auth">Admin</span>
          </v-flex>
          <v-card-title>
            <router-link :to="'/object/'+ item.slug" class="card_title">{{item.title}}</router-link>
          </v-card-title>
          <v-divider light></v-divider>
          <v-card-actions class="px-4">
            <v-flex>
              <span class="grey--text mr-3">0 view</span>
              <span class="grey--text">comment</span>
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
import ObjectItem from "@/views/Pages/Object/ObjectItem";

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
.style_title {
  text-transform: uppercase;
  text-align: center;
  color: white;
  background-color: black;
  margin: auto;
  font-size: 25px;
  font-weight: 700;
}
.style_content {
  background-color: white;
}
.card_title {
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #a1887f;
}
.card_auth {
  display: flex;
  align-items: center;
}
.text_auth {
  color: #a1887f;
}
</style>
