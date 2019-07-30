<template>
  <v-layout mt-10>
    <v-flex mt-10>
      <v-card>
        <v-card-text>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" label="Password" required></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn @click.prevent="register" class="but_register" color="success">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: ""
    };
  }
};
</script>

<style scoped>
.form-login {
  display: block;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-sheet {
  width: 50%;
  border-radius: 10px;
}
.but_register {
  text-decoration: none;
  color: white;
}
</style>
