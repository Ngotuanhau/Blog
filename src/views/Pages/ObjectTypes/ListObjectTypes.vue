<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <h1>Object Type List</h1>
      </v-flex>
      <template>
        <div>
          <v-toolbar flat color="white">
            <template>
              <v-btn color="primary" dark class="mb-2" @click="dialog_create=!dialog_create">
                <v-icon color="lighten-1" class="icon_create">$vuetify.icons.create</v-icon>
                <span>New Object Type</span>
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
            :items="object_types.object_types"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.title }}</td>
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
        <v-delete-obj-type v-model="dialog_delete" :item="currentItem" />
        <v-create-obj-type v-model="dialog_create" />
        <v-edit-obj-type v-model="dialog_edit" :item="currentItem" />
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Delete from "@/views/components/DialogObTypes/Delete";
import Create from "@/views/components/DialogObTypes/Create";
import Edit from "@/views/components/DialogObTypes/Edit";

export default {
  components: {
    vDeleteObjType: Delete,
    vCreateObjType: Create,
    vEditObjType: Edit
  },

  data() {
    return {
      currentItem: {},
      dialog_delete: false,
      dialog_create: false,
      dialog_edit: false,
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
      ],
      search: ""
    };
  },

  methods: {
    ...mapActions(["get_object_types"]),

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
    ...mapGetters(["object_types"])
  },

  created() {
    this.get_object_types();
  }
};
</script>

<style scoped>
.form_create {
  display: block;
}
.icon_create {
  margin-right: 10px;
}
.input_search {
  padding: 0;
}
</style>
