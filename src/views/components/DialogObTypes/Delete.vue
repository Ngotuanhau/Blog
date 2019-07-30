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
          <v-btn color="green darken-1" flat @click="delete_object_type(item.slug)">OK!</v-btn>
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
    delete_object_type(slug) {
      const uri = `https://api.cosmicjs.com/v1/f49c40c0-b266-11e9-aed5-b7314a38d741/object-types/${slug}`;
      axios.delete(uri).then(response => {
        console.log(response);
        let object_types = this.$store.state.ObjectTypes.object_types
          .object_types;
        const item = object_types.find(item => item.slug === slug);
        const index = object_types.indexOf(item);
        if (index >= 0) {
          object_types.splice(index, 1);
        }
        this.$store.commit("SET_OBJECT_TYPES", object_types);
      });

      this.$emit("input", false);
    }
  }
};
</script>

<style>
</style>
