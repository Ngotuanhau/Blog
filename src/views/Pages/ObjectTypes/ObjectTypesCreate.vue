<template>
  <v-container fluid>
    <!-- <v-layout class="form-create">
      <v-flex>
        <h1>Create Object Type</h1>
      </v-flex>
      <v-form>
        <v-flex>
          <v-text-field v-model="slug" :counter="20" label="Slug" required></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field v-model="singular" :counter="20" label="Singular" required></v-text-field>
        </v-flex>
        <v-btn color="success" @click.prevent="submit">Create</v-btn>
      </v-form>
    </v-layout>-->
  </v-container>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

// export default {
//   data() {
//     return {
//       title: "",
//       slug: "",
//       singular: ""
//     };
//   },
//   methods: {
//     ...mapActions(["add_object"]),
//     submit() {
//       const title = this.title;
//       const slug = this.slug;
//       const singular = this.singular;
//       this.$store
//         .dispatch("add_object", { title, slug, singular })
//         .then(() => this.$router.push("/objectTypesList"));
//     }
//   }
// };
</script>

<style scoped>
/* .form-create {
  display: block;
} */
</style>
