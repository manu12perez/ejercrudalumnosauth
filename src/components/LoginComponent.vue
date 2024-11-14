<template>
  <div>
    <h1>Login Usuario</h1>
    <form v-on:submit.prevent="login()" style="width: 500px; margin: 0 auto">
      <label>User</label>
      <input type="text" v-model="userName" name="cajausuario" class="form-control" />
      <label>Password</label>
      <input type="text" v-model="password" name="cajapassword" class="form-control" /><br />
      <button class="btn btn-outline-info">Log In</button>
    </form>
  </div>
</template>

<script>
import SeriveAlumnos from './../services/ServiceAlumnos'
import Global from "@/Global";

const service = new SeriveAlumnos();

export default {
  name: "LoginUsuario",

  data() {
    return {
      user: { userName: "", password: "" },
    };
  },

  methods: {
    login() {
      this.user = { userName: this.userName, password: this.password };
      console.log(this.user);

      service.login(this.user).then((response) => {
        Global.token = response.data.response;
        console.log(response.data.response);

        // Emitir evento al componente padre
        this.$emit("login-success");
      });
    },
  },
};
</script>
