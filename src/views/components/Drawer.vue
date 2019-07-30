<template>
  <v-card>
    <v-navigation-drawer
      :value="value"
      @input="$emit('input', $event)"
      class="c-bg-drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="c-text">Directional</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-flex>
          <v-btn class="c-btn" style="width:100%" to="/" text>
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
          <!-- <v-list-item
            v-for="(item, index) in object_types"
            :key="index"
            link
            :to="{name:'object_types', params:{slug:item.slug}, query:{title:item.title}}"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>-->
          <v-btn
            class="c-btn"
            style="width:100%"
            v-for="(item, index) in object_types"
            :key="index"
            :to="{name:'object_types', params:{slug:item.slug}, query:{title:item.title}}"
            text
          >
            <span>{{item.title}}</span>
          </v-btn>
        </v-flex>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 brown lighten-1">
          <v-btn to="/login" class="c-btn" block @click="logout">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    value: false
  },

  methods: {
    ...mapActions(["get_object_types"]),
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },

  computed: {
    ...mapGetters(["object_types"])
  },

  created() {
    this.get_object_types();
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";

.c-bg-drawer {
  background-color: $main-bg-color-3;
}
.c-text,
.c-btn {
  color: $text-color-1;
}
</style>
