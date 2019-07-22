<template>
  <v-layout>
    <v-dialog
      :value="value"
      @input="$emit('input', $event)"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar card dark color="brown lighten-4">
          <v-btn icon dark @click="$emit('input', false)">
            <v-icon color="brown lighten-1">close</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#8D6E63">New Object Type</v-toolbar-title>
        </v-toolbar>

        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-layout wrap class="create_form">
                <v-flex>
                  <v-text-field v-model="title" label="Title*"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field v-model="slug" label="Slug*"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field v-model="singular" label="Singular*"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="brown lighten-1" flat @click="$emit('input', false)">Close</v-btn>
            <v-btn color="brown lighten-1" flat @click.prevent="submit">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    value: false
  },

  data() {
    return {
      title: "",
      slug: "",
      singular: ""
    };
  },

  methods: {
    ...mapActions(["add_object_type"]),

    submit() {
      const object_type = {
        title: this.title,
        slug: this.slug,
        singular: this.singular
      };
      this.$store.dispatch("add_object_type", object_type);
      this.$refs.form.reset();
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
