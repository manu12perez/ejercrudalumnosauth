<template>
  <div class="container mt-4">
    <router-link to="/" class="btn btn-danger mb-3"> Volver </router-link>

    <!-- Si no se ha cargado la serie, mostramos un mensaje de carga -->
    <div v-if="loading" class="text-center">
      <img src="./../assets/images/Loading_icon.gif" alt="Cargando..." />
    </div>

    <!-- Si la serie está cargado, mostramos los detalles  -->
    <table v-else class="table table-striped mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Activo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="alumn in alumno" :key="alumn">
                    <th scope="row">{{ alumn.idAlumno }}</th>
                    <td>{{ alumn.nombre }}</td>
                    <td>{{ alumn.apellidos }}</td>
                    <td>
                        <img :src="alumn.imagen" alt="Imagen del alumno" style="width: 50px; height: 50px;" />
                    </td>
                    <td>{{ alumn.activo ? "Sí" : "No" }}</td>
                    <th>
                        <router-link :to="'/updateForm/' + alumn.idAlumno" class="btn btn-primary mb-3"> Modificar </router-link>
                        <router-link :to="'/delete/' + alumn.idAlumno" class="btn btn-danger mb-3"> Borrar </router-link>
                    </th>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import SeriveAlumnos from '@/services/ServiceAlumnos'
const service = new SeriveAlumnos();

export default {
    name:"AlumnosCurso",

    data() {
        return {
            alumno: {},
            loading: true,
        }
    },
    
    mounted() {
        let curso = this.$route.params.curso;

        service.getAlumnoscurso(curso).then(result => {
            console.log(result);
            this.alumno = result;
            this.loading = false;
        })
    },

    watch: {
    "$route.params.curso"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loading = true; // Mostrar el cargando mientras se obtiene la nueva serie

        // Llamamos a findSerie con el nuevo id
        service.getAlumnoscurso(nextVal).then((result) => {
          this.alumno = result;
          this.loading = false;
        });
      }
    },
  },
}
</script>