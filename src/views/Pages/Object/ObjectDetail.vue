<template>
  <v-container class="white mt-5">
    <v-layout column>
      <v-flex py-3 class="card_auth">
        <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
        <span>Admin</span>
      </v-flex>
      <v-flex>
        <div class="headline font-weight-bold mb-3">
          <span>{{title}}</span>
        </div>
        <div class="post_image" v-for="(item, index) in image" :key="index">
          <v-img :src="item.url" alt="hinhanh"></v-img>
        </div>
        <div class="content">
          <span v-html="content">{{content}}</span>
        </div>
      </v-flex>
      <v-divider light></v-divider>
      <v-flex my-3>
        <router-link
          :to="{name:'object_types',params:{slug:type_slug},query:{title:type_slug}}"
          class="title text-uppercase"
          style="text-decoration: none; color: #a1887f"
        >{{type_slug}}</router-link>
      </v-flex>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-flex>
          <span class="grey--text mr-3">0 view</span>
          <span class="grey--text">comment</span>
        </v-flex>
        <v-btn flat icon color="red">
          <v-icon>$vuetify.icons.like</v-icon>
        </v-btn>
      </v-card-actions>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
      type_slug: "",
      image: []
    };
  },

  mounted() {
    axios
      .get(
        `https://api.cosmicjs.com/v1/blog-post/object/${this.$route.params.slug}`
      )
      .then(response => {
        console.log(response.data.object);
        this.title = response.data.object.title;
        this.content = response.data.object.content;
        this.type_slug = response.data.object.type_slug;
        this.image = response.data.object.metafields;
      });
  }
};
</script>

<style scoped>
.post_image {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.card_auth {
  display: flex;
  color: #a1887f;
  align-items: center;
}
</style>
