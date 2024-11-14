<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./../assets/logo.png" style="width:40px; height:40px"/></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/create" class="nav-link"> Nuevo Alumno </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/update" class="nav-link"> Modificar Alumno </router-link>
          </li>           -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              Cursos
            </a>
            <ul class="dropdown-menu">
              <li v-for="curso in cursos" :key="curso">
                <router-link class="dropdown-item" :to="'/cursos/' + curso">{{curso}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SeriveAlumnos from '@/services/ServiceAlumnos'
const service = new SeriveAlumnos();

export default {
    name: "MenuComponent",

    data() {
        return {
            cursos: [],
        }
    },

    mounted() {
        service.getCursos().then(result => {
            this.cursos = result;
        })
    }
}
</script>