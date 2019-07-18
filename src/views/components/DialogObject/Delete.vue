<template>
  <v-layout row justify-center>
    <v-dialog :value="value" @input="$emit('input', $event)" max-width="290">
      <v-card>
        <v-card-title class="headline">Delete Item</v-card-title>
        <v-card-text>
          You want delete item --- {{item.title}}
          <br />Click Ok! to delete
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="$emit('input', false)">Close</v-btn>
          <v-btn color="green darken-1" flat @click="delete_objects(item.slug)">OK!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  props: {
    value: false,
    item: {}
  },

  methods: {
    delete_objects(slug) {
      const uri = `https://api.cosmicjs.com/v1/blog-post/objects/${slug}`;
      axios.delete(uri).then(response => {
        console.log(response);
        let objects = this.$store.state.Object.objects.objects;
        const item = objects.find(item => item.slug === slug);
        const index = objects.indexOf(item);
        if (index >= 0) {
          objects.splice(index, 1);
        }
        this.$store.commit("SET_OBJECTS_SUCCESS", objects);
      });
      this.$emit("input", false);
    }
  }
};
</script>

<style>
</style>
