<template>
  <v-layout row justify-center>
    <v-dialog :value="value" @input="$emit('input', $event)" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Object Type</span>
        </v-card-title>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-layout wrap class="create_form">
                <v-flex>
                  <v-text-field v-model="editData.title" label="Title*"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="$emit('input', false)">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.prevent="submit">Save</v-btn>
          </v-card-actions>
        </v-form>
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

  data() {
    return {
      title: "",
      editData: {}
    };
  },

  watch: {
    value(val) {
      if (val) {
        this.editData = Object.assign({}, this.item);
      }
    }
  },

  methods: {
    submit() {
      axios
        .put(
          "https://api.cosmicjs.com/v1/blog-post/edit-object-type",
          this.editData
        )
        .then(response => {
          console.log(response.data);
          this.item.title = response.data.object_type.title;
        });
      this.$emit("input", false);
    }
  }
};
</script>

<style scoped>
.create_form {
  display: block;
}
</style>
