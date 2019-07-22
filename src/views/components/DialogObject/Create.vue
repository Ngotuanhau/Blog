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
          <v-toolbar-title style="color:#8D6E63">New Object</v-toolbar-title>
        </v-toolbar>

        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-layout wrap class="create_form">
                <v-flex>
                  <span>Type Slug *</span>
                  <v-radio-group v-model="radioGroup" d-flex row>
                    <v-radio
                      v-for="(item, index) in type_slugs"
                      :key="index"
                      :label="item"
                      :value="item"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex>
                  <span>Title *</span>
                  <v-text-field v-model="title" single-line solo></v-text-field>
                </v-flex>
                <v-flex>
                  <span>Slug *</span>
                  <v-text-field v-model="slug" single-line solo></v-text-field>
                </v-flex>
                <v-flex>
                  <span class="sp_content">Content</span>
                  <v-vue-editor v-model="content"></v-vue-editor>
                </v-flex>
                <v-flex class="uploadfile">
                  <span>Upload</span>
                  <input
                    type="file"
                    ref="files"
                    multiple
                    accept="image/*"
                    @change="handleChange"
                    style="display:none"
                  />
                  <v-btn class="btn_upload" @click="$refs.files.click() ">
                    <v-icon class="btn_icon">$vuetify.icons.plusmeta</v-icon>
                  </v-btn>
                  <v-layout row wrap>
                    <v-flex xs4 d-flex v-for="(file, index) in files" :key="index">
                      <img width="100%" class="preview" :ref="`image${index}`" />
                    </v-flex>
                  </v-layout>
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
import { mapActions, mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
import axios from "axios";

export default {
  components: {
    vVueEditor: VueEditor
  },
  props: {
    value: false
  },

  data() {
    return {
      title: "",
      slug: "",
      content: "",
      metafields: "",
      files: [],
      radioGroup: "",
      type_slugs: ""
    };
  },

  methods: {
    ...mapActions(["add_object"]),

    async submit() {
      const uploadPromise = [];
      const fileslist = this.files;
      console.log(fileslist);
      fileslist.forEach(image => {
        console.log(image);
        const formData = new FormData();
        formData.append("file", image);
        console.log(image);
        uploadPromise.push(
          axios.post("https://api.cosmicjs.com/v1/blog-post/media", formData)
        );
        console.log(uploadPromise);
      });
      let images = await Promise.all(uploadPromise);
      // console.log(images);
      const newimages = [];
      images.forEach(item => {
        // console.log(item.data);
        newimages.push(item.data);
        // console.log(newimages);
      });
      const newmedia = newimages.map((item, index) => {
        console.log(index);
        return {
          type: "file",
          title: "Image" + index,
          key: "image" + index,
          value: item.media.name,
          url: item.media.url,
          imgix_url: item.media.imgix_url
        };
      });
      const object = {
        type_slug: this.radioGroup,
        title: this.title,
        slug: this.slug,
        content: this.content,
        metafields: newimages
      };
      console.log(object);
      this.$store.dispatch("add_object", object);
      let objects = this.$store.state.Object.objects.objects;
      this.$refs.form.reset();
      this.$emit("input", false);
      this.$store.commit("SET_OBJECTS_SUCCESS", objects);
    },

    handleChange(event) {
      const uploadfile = this.$refs.files.files;
      for (var i = 0; i < uploadfile.length; i++) {
        this.files.push(uploadfile[i]);
      }
      this.getImagePreview();
    },

    getImagePreview() {
      for (let i = 0; i < this.files.length; i++) {
        let reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            this.$refs[`image${i}`][0].src = reader.result;
          },
          false
        );
        reader.readAsDataURL(this.files[i]);
      }
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

<style scoped>
.create_form {
  display: block;
}
.uploadfile {
  display: grid;
  margin-top: 25px;
}
.btn_upload {
  width: 115px;
  margin-top: 10px;
  padding: 0;
  height: 120px;
  border-style: dashed;
  background-color: #bdbdbd;
  box-shadow: none !important;
  -webkit-box-shadow: none;
}
/* .preview {
  margin: 10px
} */
</style>
