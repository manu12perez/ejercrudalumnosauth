<template>
  <div class="container mt-4">
    <router-link :to="'/cursos/' + alumno.idCurso" class="btn btn-secondary mb-3"> Volver </router-link>
    <h1>Eliminar Alumno</h1>

    <!-- Si no se ha cargado el alumno, mostramos un mensaje de carga -->
    <div v-if="loading" class="text-center">
      <img src="./../assets/images/Loading_icon.gif" alt="Cargando..." />
    </div>

    <!-- Si el alumno está cargado, mostramos los detalles -->
    <div v-else class="card">
      <div class="card-header">
        <h4>Detalles</h4>
      </div>
      <div class="card-body">
        <p><strong>Nombre:</strong> {{ alumno.nombre }}</p>
        <p><strong>Apellidos:</strong> {{ alumno.apellidos }}</p>
        <p><strong>Imagen:</strong></p>
        <img :src="alumno.imagen" alt="Imagen del alumno" class="img-fluid" style="width: 150px; height: 150px;"/>
      </div>
      <!-- Botón para eliminar alumno -->
      <button @click="confirmarBorrado" class="btn btn-danger">Borrar</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2"; 
import SeriveAlumnos from '@/services/ServiceAlumnos';
const service = new SeriveAlumnos();

export default {
  name: "DeleteAlumno",
  data() {
    return {
      alumno: {},
    };
  },

  mounted() {
    // Obtener el id del alumno desde los parámetros de la URL
    let idAlumno = this.$route.params.idAlumno;

    // Buscar el alumno por su ID
    service.findAlumno(idAlumno).then((result) => {
        this.alumno = result;
      })
  },

  methods: {
    // Método para mostrar el popup de confirmación de borrado
    confirmarBorrado() {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, eliminamos el alumno
          service
            .deleteAlumno(this.alumno.idAlumno)
            .then(() => {
              Swal.fire({
                title: "¡Eliminado!",
                text: "El alumno ha sido eliminado.",
                icon: "success",
              }).then(() => {
                // Redirigimos a la página de alumnosCurso
                this.$router.push("/cursos/" + this.alumno.idCurso);
              });
            })
            .catch((error) => {
              console.error("Error al eliminar el alumno:", error);
              Swal.fire({
                title: "Error",
                text: "Hubo un error al eliminar el alumno.",
                icon: "error",
              });
            });
        }
      });
    },
  },
};
</script>
