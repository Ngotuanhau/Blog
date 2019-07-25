<template>
  <v-container class="white mt-5 pa-5">
    <v-layout v-if="object" column pa-5>
      <v-flex py-3 class="card_auth">
        <v-icon size="40px" class="mr-2" color="brown lighten-2">$vuetify.icons.person</v-icon>
        <span>{{object.metadata.author.title}}</span>
        <v-spacer></v-spacer>
        <span>{{ object.created_at | moment("dddd, MMMM Do YYYY") }}</span>
      </v-flex>
      <v-flex>
        <div class="headline font-weight-bold mb-4">
          <span>{{object.title}}</span>
        </div>
        <div class="title font-weight-medium" style="text-align: center">
          <span>{{object.metadata.description}}</span>
        </div>
        <div class="pa-5">
          <v-img :src="object.metadata.image.url" alt="hinhanh"></v-img>
        </div>
        <div class="content">
          <span v-html="object.content"></span>
        </div>
      </v-flex>
      <v-divider light></v-divider>
      <v-flex my-3>
        <router-link
          :to="{name:'object_types',params:{slug:object.type_slug},query:{title:object.type_slug}}"
          class="title text-uppercase"
          style="text-decoration: none; color: #a1887f"
        >{{object.type_slug}}</router-link>
      </v-flex>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-flex>
          <v-btn flat icon>
            <v-icon color="grey">$vuetify.icons.comment</v-icon>
          </v-btn>
        </v-flex>
        <v-btn flat icon color="red">
          <v-icon>$vuetify.icons.like</v-icon>
        </v-btn>
      </v-card-actions>
    </v-layout>
    <v-layout column mt-5>
      <v-flex>
        <span class="title" style="color: #a1887f">Related posts</span>
      </v-flex>

      <v-container fluid grid-list-md>
        <v-data-iterator
          :items="objects_related"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          row
          wrap
          content-tag="v-layout"
        >
          <template v-slot:item="props">
            <v-flex d-flex xs12 sm6 md6>
              <v-card class="style_card brown lighten-5 ma-2" flat>
                <router-link :to="'/object/'+ props.item.slug">
                  <v-img
                    :src="props.item.metadata.image.url"
                    aspect-ratio="1.75"
                    class="style_image"
                  ></v-img>
                </router-link>

                <v-card-title class="px-3 pb-5 style_middle">
                  <router-link
                    :to="'/object/'+ props.item.slug"
                    class="subtitle-1 font-weight-medium style_text"
                    style="color: #f1f1f1; text-decoration: none"
                  >{{props.item.title}}</router-link>
                  <v-flex>
                    <span style="color: #f1f1f1">{{counter}}</span>
                    <v-btn flat icon color="white" @click="increment">
                      <v-icon>$vuetify.icons.like</v-icon>
                    </v-btn>
                  </v-flex>
                </v-card-title>
              </v-card>
            </v-flex>
          </template>
        </v-data-iterator>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      object: null,
      objects: [],
      rowsPerPageItems: [2, 4, 6],
      pagination: {
        rowsPerPage: 2
      }
    };
  },

  computed: {
    objects_related() {
      return this.objects.filter(item => item.slug !== this.object.slug);
    },
    counter() {
      return this.$store.getters.counter;
    }
  },

  mounted() {
    this.getData();
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },

    getData() {
      axios
        .get(
          `https://api.cosmicjs.com/v1/blog-post/object/${this.$route.params.slug}`
        )
        .then(response => {
          console.log(response.data.object);
          this.object = response.data.object;
          this.getObjects();
        });
    },

    getObjects() {
      axios
        .get(
          `https://api.cosmicjs.com/v1/blog-post/objects?type=${this.object.type_slug}`
        )
        .then(response => {
          console.log(response);
          this.objects = response.data.objects;
        });
    }
  },

  watch: {
    $route(val) {
      console.log(val.params.slug);
      this.getData();
    }
  }
};
</script>

<style scoped>
.card_auth {
  display: flex;
  color: #a1887f;
  align-items: center;
}
.style_action {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.style_image {
  opacity: 1;
  display: block;
  transition: 0.2s ease;
}
.style_card:hover .style_image {
  opacity: 0.7;
}
.style_card:hover .style_middle {
  opacity: 1;
}
.style_middle {
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  transition: 0.5s ease;
  opacity: 0;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
</style>
