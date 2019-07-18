<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <h1>List Post</h1>
      </v-flex>
      <template>
        <div>
          <v-toolbar flat color="white">
            <template>
              <v-btn color="primary" dark class="mb-2" @click="dialog_create=!dialog_create">
                <v-icon color="lighten-1" class="icon_create">$vuetify.icons.create</v-icon>
                <span>New post</span>
              </v-btn>
            </template>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search. . ."
              single-line
              hide-details
              class="input_search"
            ></v-text-field>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="objects.objects"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>
                <router-link :to="'/object/'+ props.item.slug">{{ props.item.title }}</router-link>
              </td>
              <td class="justify-center layout px-0">
                <v-btn color="primary" @click="openEdit(props.item)">
                  <v-icon small>$vuetify.icons.pencil</v-icon>
                </v-btn>
                <v-btn color="primary" @click="openDelete(props.item)">
                  <v-icon small>$vuetify.icons.trash</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </div>
        <v-delete-object v-model="dialog_delete" :item="currentItem" />
        <v-create-object v-model="dialog_create" />
        <v-edit-object v-model="dialog_edit" :item="currentItem" />
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Create from "@/views/components/DialogObject/Create";
import Delete from "@/views/components/DialogObject/Delete";
import Edit from "@/views/components/DialogObject/Edit";

export default {
  components: {
    vCreateObject: Create,
    vDeleteObject: Delete,
    vEditObject: Edit
  },

  data() {
    return {
      dialog_create: false,
      dialog_edit: false,
      dialog_delete: false,
      search: "",
      currentItem: {},
      headers: [
        {
          text: "Title",
          value: "title",
          sortable: false
        },
        {
          text: "Action",
          value: "",
          sortable: false,
          align: "center"
        }
      ]
    };
  },

  methods: {
    ...mapActions(["get_objects"]),

    openDelete(item) {
      this.currentItem = item;
      this.dialog_delete = true;
    },

    openEdit(item) {
      this.currentItem = item;
      this.dialog_edit = true;
    }
  },

  computed: {
    ...mapGetters(["objects"])
  },

  created() {
    this.get_objects();
  }
};
</script>

<style scoped>
.icon_create {
  margin-right: 10px;
}
</style>
