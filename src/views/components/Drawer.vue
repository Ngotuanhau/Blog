<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    fixed
    app
    class="brown lighten-5"
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title" style="color:#8D6E63">Directional</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-list dense class="pt-0">
      <v-flex>
        <v-btn class="ma-0" color="brown lighten-1" style="width:100%" to="/" flat>
          <!-- <v-icon>$vuetify.icons.categories</v-icon> -->
          <span>Home</span>
        </v-btn>
        <!-- <v-btn class="ma-0" color="brown lighten-1" style="width:100%" to="/listObjectType" flat>
          <v-icon color="lighten-1">$vuetify.icons.categories</v-icon>
          <span>Object Types</span>
        </v-btn>
        <v-btn class="ma-0" color="brown lighten-1" style="width:100%" to="/listObject" flat>
          <v-icon color="lighten-1">$vuetify.icons.categories</v-icon>
          <span>Object</span>
        </v-btn>-->
        <v-btn
          class="ma-0"
          color="brown lighten-1"
          style="width:100%"
          v-for="(item, index) in object_types"
          :key="index"
          :to="{name:'object_types', params:{slug:item.slug}, query:{title:item.title}}"
          flat
        >
          <span>{{item.title}}</span>
        </v-btn>
      </v-flex>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    value: false
  },

  methods: {
    ...mapActions(["get_object_types"])
  },

  computed: {
    ...mapGetters(["object_types"])
  },

  created() {
    this.get_object_types();
  }
};
</script>

<style scoped>
</style>
