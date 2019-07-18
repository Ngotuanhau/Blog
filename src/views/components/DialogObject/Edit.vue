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
              <v-layout column class="create_form">
                <v-flex>
                  <span>Type Slug *</span>
                  {{editData.radioGroup}}
                  <v-radio-group v-model="editData.radioGroup" d-flex row>
                    <v-radio
                      v-for="(item, index) in editData.radioGroup"
                      :key="index"
                      :label="item"
                      :value="item"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex>
                  <v-text-field v-model="editData.title" label="Title*"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field v-model="editData.slug" label="Slug*"></v-text-field>
                </v-flex>
                <v-flex>
                  <span class="sp_content">Content</span>
                  <v-vue-editor v-model="editData.content"></v-vue-editor>
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
import { VueEditor } from "vue2-editor";

export default {
  components: {
    vVueEditor: VueEditor
  },
  props: {
    value: false,
    item: {}
  },

  data() {
    return {
      // title: "",
      // type_slugs: "",
      editData: {}
      // radioGroup: ""
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
    },

    get_type_slugs() {
      axios
        .get("https://api.cosmicjs.com/v1/blog-post/object-types")
        .then(response => {
          console.log(response);
          const type_slugs = [];
          const slugs = response.data.object_types.forEach(item => {
            // console.log(item);
            type_slugs.push(item.slug);
            // console.log(type_slugs);
            this.type_slugs = type_slugs;
            // console.log(this.type_slugs);
          });
        });
    }
  },

  created() {
    this.get_type_slugs();
  }
};
</script>

<style>
</style>
