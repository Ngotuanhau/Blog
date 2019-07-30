<template>
  <v-container class="c-bg-ob-detail mt-5 pa-5">
    <v-layout v-if="object" column pa-5>
      <v-flex py-3 class="c-person">
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
          class="title text-uppercase c-type_slug"
        >{{object.type_slug}}</router-link>
      </v-flex>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-flex>
          <v-btn text icon>
            <v-icon color="grey">$vuetify.icons.comment</v-icon>
          </v-btn>
        </v-flex>
        <v-btn text icon color="red">
          <v-icon>$vuetify.icons.like</v-icon>
        </v-btn>
      </v-card-actions>
    </v-layout>
    <v-layout column mt-5>
      <v-flex>
        <span class="title c-related">Related posts</span>
      </v-flex>
      <v-container fluid grid-list-md>
        <v-data-iterator
          :items="objects_related"
          :items-per-page.sync="itemsPerPage"
          :footer-props="{ itemsPerPageOptions }"
        >
          <template v-slot:default="props">
            <v-layout wrap>
              <v-flex xs12 sm6 md4 v-for="(item, index) in props.items" :key="index">
                <v-card class="c-card ma-2" text>
                  <router-link :to="'/object/'+ item.slug">
                    <v-img :src="item.metadata.image.url" height="300" class="c-image"></v-img>
                    <v-card-title class="middle">
                      <router-link
                        :to="'/object/'+ item.slug"
                        class="headline font-weight-medium c-text"
                      >{{item.title}}</router-link>
                      <v-flex>
                        <span class="c-text">{{counter}}</span>
                        <v-btn text icon color="white" @click="increment">
                          <v-icon>$vuetify.icons.like</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-card-title>
                  </router-link>
                </v-card>
              </v-flex>
            </v-layout>
          </template>
        </v-data-iterator>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Url from "@/plugins/config";

export default {
  data() {
    return {
      object: null,
      objects: [],
      itemsPerPageOptions: [3, 6, 9],
      itemsPerPage: 3
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
        .get(`${Url.url_object_detail}/${this.$route.params.slug}`)
        .then(response => {
          console.log(response.data.object);
          this.object = response.data.object;
          this.getObjects();
        });
    },

    getObjects() {
      axios
        .get(`${Url.url_object_types}${this.object.type_slug}`)
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

<style lang="scss" scoped>
@import "../../../styles/main.scss";

.c-bg-ob-detail {
  background-color: $main-bg-color-2;
}
.c-person {
  display: flex;
  color: $text-color-1;
  align-items: center;
}
.c-type_slug,
.c-related {
  text-decoration: none;
  color: $text-color-1;
}
.c-image {
  opacity: 1;
  display: block;
  transition: 0.2s ease;
  border-radius: 10px;
}
.c-card {
  border-radius: 10px;
}
.c-card:hover .c-image {
  opacity: 0.7;
}
.c-card:hover .middle {
  opacity: 1;
}
.middle {
  border-radius: 10px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  transition: 0.5s ease;
  opacity: 0;
  font-size: 20px;
  display: block;
  text-align: center;
  padding-top: 70px;
}
.c-text {
  color: $text-color-2;
  text-decoration: none;
}
</style>
