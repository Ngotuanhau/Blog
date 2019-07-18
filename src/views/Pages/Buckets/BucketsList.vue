<template>
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <h1>List Buckets</h1>
        <v-btn color="info">
          <router-link to="/bucketcreate" class="bnt-create">Create Bucket</router-link>
        </v-btn>
      </v-flex>
      <v-data-iterator :items="list_buckets.buckets" content-tag="v-layout" row wrap>
        <template v-slot:item="props">
          <v-flex xs12 sm6 md4 lg3>
            <v-card>
              <v-card-text>{{props.item.title}}</v-card-text>
            </v-card>
          </v-flex>
        </template>
      </v-data-iterator>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "buckets",
  methods: {
    ...mapActions(["get_buckets_list"])
  },
  computed: mapGetters(["list_buckets"]),
  created() {
    this.get_buckets_list();
  },
  mounted() {}
};
</script>

<style scoped>
.bnt-create {
  text-decoration: none;
  color: #fff;
}
.v-card {
  margin: 10px 10px;
}
</style>
