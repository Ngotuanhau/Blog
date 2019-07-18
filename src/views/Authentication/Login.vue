<template>
  <v-layout justify-center align-center>
    <v-flex>
      <v-card>
        <v-card-text>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field :type="'password'" v-model="password" label="Password" required></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn @click.prevent="login" color="success">Login</v-btn>
          <v-btn color="info">
            <router-link to="/register" class="but_register">Register</router-link>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info" flat class="btn_face">
            <v-icon color="icon_face">$vuetify.icons.facebook</v-icon>
          </v-btn>
          <v-btn color="red" flat class="btn_google">
            <v-icon color="icon_google">$vuetify.icons.google</v-icon>
          </v-btn>
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
      email: "ngotuanhaudn@gmail.com",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "Haumappro1990trang55"
    };
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"));
    }
  }
};
</script>

<style scoped>
.form-login {
  display: block;
}
.btn_face,
.btn_google {
  padding: 0;
  min-width: 30px;
}
.but_register {
  text-decoration: none;
  color: white;
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
</style>
