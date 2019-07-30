<template>
  <v-layout mt-10 d-flex justify-center>
    <v-flex mt-10 md6 lg6>
      <v-card width="100%">
        <v-card-text>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field :type="'password'" v-model="password" label="Password" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-flex d-flex>
            <v-btn @click.prevent="login" color="success">Login</v-btn>
            <v-btn color="info" to="/register" class="but_register">Register</v-btn>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex d-flex justify-end>
            <v-btn icon color="info" text class="btn_face">
              <v-icon color="icon_face">$vuetify.icons.facebook</v-icon>
            </v-btn>
            <v-btn icon color="red" text class="btn_google">
              <v-icon color="icon_google">$vuetify.icons.google</v-icon>
            </v-btn>
          </v-flex>
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
.btn_face,
.btn_google {
  min-width: 30px;
  color: white;
}
.but_register {
  text-decoration: none;
  color: white;
}
</style>
