<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="objects"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      row
      wrap
      content-tag="v-layout"
    >
      <template v-slot:item="props">
        <v-flex d-flex xs12 md6>
          <v-card class="ma-3" flat>
            <router-link :to="'/object/'+ props.item.slug">
              <v-img :src="props.item.metadata.image.url" aspect-ratio="1.75"></v-img>
            </router-link>
            <v-flex px-3 my-3 class="card_auth">
              <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
              <div>
                <span class="text_auth">{{props.item.metadata.author.title}}</span>
                <v-spacer></v-spacer>
                <span class="text_auth">{{ props.item.created_at | moment("MMMM Do YYYY") }}</span>
              </div>
            </v-flex>
            <v-card-title class="px-3 pb-5">
              <router-link
                :to="'/object/'+ props.item.slug"
                class="headline font-weight-medium"
                style="color:#A1887F; text-decoration: none"
              >{{props.item.title}}</router-link>
            </v-card-title>
            <v-card-actions class="px-3 style_action">
              <v-flex>
                <span class="grey--text mr-3">0 view</span>
              </v-flex>
              <v-spacer></v-spacer>
              <div>
                <span class="grey--text">{{counter}}</span>
                <v-btn flat icon color="red" @click="increment">
                  <v-icon>$vuetify.icons.like</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      rowsPerPageItems: [6, 12, 18],
      pagination: {
        rowsPerPage: 6
      }
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
