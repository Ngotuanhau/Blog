<template>
  <v-card class="ma-3" flat>
    <router-link :to="'/object/'+ item.slug">
      <v-img :src="item.metadata.image.url" aspect-ratio="1.75"></v-img>
    </router-link>
    <v-flex px-3 my-3 class="card_auth">
      <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
      <span class="text_auth">Admin</span>
    </v-flex>
    <v-card-title class="px-3 pb-5">
      <router-link
        :to="'/object/'+ item.slug"
        class="headline font-weight-medium"
        style="color:#A1887F; text-decoration: none"
      >{{item.title}}</router-link>
    </v-card-title>
    <v-card-actions class="px-3 style_action">
      <v-flex>
        <span class="grey--text mr-3">0 view</span>
        <span class="grey--text">comment</span>
      </v-flex>
      <v-spacer></v-spacer>
      <v-btn flat icon color="red">
        <v-icon>$vuetify.icons.like</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style scoped>
.card_auth {
  display: flex;
  align-items: center;
}
.text_auth {
  color: #a1887f;
}
.style_action {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
