<template>
  <v-layout>
    <span>Upload</span>
    <input type="file" id="file" ref="file" @change="handleFileUpload()" />
    <button @click="submitFile()">Submit</button>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      file: []
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitFile() {
      const formData = new FormData();
      formData.append("file", this.file);
    }
  }
};
</script>

<style>
</style>
