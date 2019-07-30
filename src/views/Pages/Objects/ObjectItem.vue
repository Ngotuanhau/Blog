<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="objects"
      :items-per-page.sync="itemsPerPage"
      :footer-props="{ itemsPerPageOptions }"
    >
      <template v-slot:default="props">
        <v-layout wrap>
          <v-flex
            d-flex
            xs12
            sm6
            md6
            v-for="(item, index) in props.items"
            :key="index"
            class="pa-2"
          >
            <v-card>
              <router-link :to="'/object/'+ item.slug">
                <v-img :src="item.metadata.image.url" alt="hinhanh" height="300"></v-img>
              </router-link>
              <v-flex class="my-2 px-2 c-person">
                <v-icon size="40px" color="brown lighten-2" class="mr-3">$vuetify.icons.person</v-icon>
                <div>
                  <span class="c-text">{{item.metadata.author.title}}</span>
                  <v-spacer></v-spacer>
                  <span class="c-text">{{item.created_at | moment("MMMM Do YYYY") }}</span>
                </div>
              </v-flex>
              <v-card-title class="mb-9">
                <router-link
                  :to="'/object/'+ item.slug"
                  class="headline font-weight-medium c-text"
                >{{item.title}}</router-link>
              </v-card-title>
              <v-card-actions class="c-action">
                <v-flex>
                  <span class="grey--text">0 view</span>
                </v-flex>
                <v-spacer></v-spacer>
                <div>
                  <span class="grey--text">{{counter}}</span>
                  <v-btn text icon color="red" @click="increment" height="40">
                    <v-icon>$vuetify.icons.like</v-icon>
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      itemsPerPageOptions: [4, 8, 12],
      itemsPerPage: 4
    };
  },

  computed: {
    counter() {
      return this.$store.getters.counter;
    },

    ...mapGetters(["objects"])
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },

    ...mapActions(["get_objects"])
  },

  created() {
    this.get_objects();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/main.scss";
.c-person {
  display: flex;
  align-items: center;
}
.c-text {
  color: $text-color-1;
  text-decoration: none;
}
.c-action {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 0;
}
</style>
