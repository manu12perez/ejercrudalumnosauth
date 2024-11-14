<template>
  <div>
    <router-link :to="'/cursos/' + alumno.idCurso" class="btn btn-secondary mb-3"> Volver </router-link>
    <h1>Actualizar Alumno</h1>

   <form v-on:submit.prevent="updateAlumno()" style="width: 500px; margin: 0 auto">
      <label>Id Alumno</label>
      <input type="number" v-model="alumno.idAlumno" class="form-control" disabled/>
      <label class="form-label">Nombre</label>
      <input type="text" v-model="alumno.nombre" class="form-control" />
      <label class="form-label">Apellidos</label>
      <input type="text" v-model="alumno.apellidos" class="form-control" />
      <label class="form-label">Imagen URL</label>
      <input type="text" v-model="alumno.imagen" class="form-control" />
      <label class="form-label">Activo (0 o 1)</label>
      <input type="boolean" v-model="alumno.activo" class="form-control" />
      <label class="form-label">Curso</label>
      <input type="boolean" v-model="alumno.idCurso" class="form-control" /><br />
      <button class="btn btn-success">Create</button>
    </form>
  </div>
</template>

<script>
import SeriveAlumnos from '@/services/ServiceAlumnos';
const service = new SeriveAlumnos();

export default {
  name: "UpdateAlumno",
  data() {
    return {
      alumno: {

      },
    };
  },

  mounted() {
    let idAlumno = this.$route.params.idAlumno;

    service.findAlumno(idAlumno).then((result) => {
      this.alumno = result;
    });
  },

  methods: {
    updateAlumno() {
      service.updateAlumno(this.alumno).then(() => {
        this.$router.push("/cursos/" + this.alumno.idCurso);
      });
    },
  },
};
</script>

