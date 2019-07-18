<template>
  <v-navigation-drawer :value="value" @input="$emit('input', $event)" fixed app>
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title">Directional</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-flex>
        <v-btn class="btn_objTypes" to="/" flat>
          <v-icon color="lighten-1">$vuetify.icons.categories</v-icon>
          <span class="menu_text">Home</span>
        </v-btn>
        <v-btn class="btn_objTypes" to="/listObjectType" flat>
          <v-icon color="lighten-1">$vuetify.icons.categories</v-icon>
          <span class="menu_text">Object Types</span>
        </v-btn>
        <v-btn class="btn_objTypes" to="/listObject" flat>
          <v-icon color="lighten-1">$vuetify.icons.categories</v-icon>
          <span class="menu_text">Object</span>
        </v-btn>
        <v-btn
          class="btn_objTypes"
          v-for="item in object_types.object_types"
          :key="item.slug"
          :to="item.slug"
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
.v-list-tile-content {
  display: flex;
  justify-content: center;
}
.menu_text {
  margin-left: 10px;
}
.v-flex {
  width: 100%;
}
.btn_objTypes {
  width: 100%;
  color: darkcyan;
  margin: 0;
  box-shadow: none !important;
}
</style>
