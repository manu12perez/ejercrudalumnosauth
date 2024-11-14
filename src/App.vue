<template>
  <div>
    <LoginComponent v-if="!isAuthenticated" @login-success="onLoginSuccess" />
    <MenuComponent v-if="isAuthenticated" />    
    <router-view v-if="isAuthenticated"></router-view>
  </div>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";
import LoginComponent from './components/LoginComponent.vue';

export default {
  name: "App",
  components: {
    MenuComponent,
    LoginComponent
  },
  data() {
    return {
      isAuthenticated: false,  // Controla si el usuario está logueado
    };
  },
  methods: {
    // Este método se ejecutará cuando el login sea exitoso
    onLoginSuccess() {
      this.isAuthenticated = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
