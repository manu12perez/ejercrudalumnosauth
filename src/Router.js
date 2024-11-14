import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import AlumnosCurso from './components/AlumnosCurso.vue'
import CreateAlumno from './components/CreateAlumno.vue'
import UpdateAlumno from './components/UpdateAlumno.vue'
import DeleteAlumno from './components/DeleteAlumno.vue'

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/cursos/:curso", component: AlumnosCurso },
    { path: "/create", component: CreateAlumno },
    { path: "/updateForm/:idAlumno", component: UpdateAlumno },
    { path: "/delete/:idAlumno", component: DeleteAlumno },
    
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;