<template>
  <div class="breadcrumb mt-5">
    <!-- <v-breadcrumbs icon :items="breadcrumbs" :large="large" divider=">">
      <v-breadcrumbs-item slot="item" slot-scope="{item}" exact :to="item.routeTo">{{item.name}}</v-breadcrumbs-item>
    </v-breadcrumbs>-->
    <v-breadcrumbs>
      <v-icon slot="divider">forward</v-icon>
      <v-breadcrumbs-item v-for="item in breadcrumbs" :key="item.name">{{item.name}}</v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [],
      large: false
    };
  },

  mounted() {
    this.updateList();
  },

  watch: {
    $route() {
      this.updateList();
    }
  },

  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbs[pRouteTo].link)
        this.$route.push(this.breadcrumbs[pRouteTo].link);
    },

    updateList() {
      console.log(this.$route.params.slug);
      console.log(this.$route);
      this.breadcrumbs = this.$route.meta.breadcrumb;
      console.log(this.breadcrumbs);
    }
  }
};
</script>

<style scoped>
</style>
