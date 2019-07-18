<template>
  <v-container fluid>
    <v-layout class="form-create">
      <v-flex>
        <h1>Create Buckets</h1>
      </v-flex>
      <v-form>
        <v-flex>
          <v-text-field v-model="slug" :counter="20" label="Slug" required></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>
        </v-flex>
        <v-btn color="success" @click.prevent="submit">Create</v-btn>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      slug: "",
      title: ""
    };
  },
  methods: {
    ...mapActions(["add_bucket"]),
    submit() {
      const slug = this.slug;
      const title = this.title;
      this.$store
        .dispatch("add_bucket", { slug, title })
        .then(() => this.$router.push("/bucketslist"));
    }
  }
};
</script>

<style scoped>
.form-create {
  display: block;
}
</style>
