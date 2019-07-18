<template>
  <v-card class="ma-3" flat>
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
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style scoped>
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
