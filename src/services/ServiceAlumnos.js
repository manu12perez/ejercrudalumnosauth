import axios from "axios";
import Global from "@/Global";

export default class SeriveAlumnos {

    login(user) {
        return new Promise(function (resolve) {
            let request = "api/auth/login";
            let url = Global.urlApiAlumnos + request;

            axios.post(url, user).then((response) => {
                resolve(response);
            })
        })
    }

    getCursos() {
        return new Promise(function (resolve) {
            let cursos = [];
            let request = "api/Alumnos/CursosToken";
            let url = Global.urlApiAlumnos + request;
            let token = Global.token;

            axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Leyendo cursos");
                cursos = response.data;
                resolve(cursos);
            })
        })
    }

    getAlumnoscurso(curso) {
        return new Promise(function(resolve) {
            let alumnos = [];
            let request = "api/Alumnos/FiltrarCursoToken/" + curso;
            let url = Global.urlApiAlumnos + request;
            let token = Global.token;

            axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Leyendo alumnos del curso: " + curso);
                alumnos = response.data;
                resolve(alumnos);
            })
        })
    }

    insertAlumno(alumno) {
        return new Promise(function(resolve) {
            let request = "api/Alumnos/InsertAlumnoToken";
            let url = Global.urlApiAlumnos + request;
            let token = Global.token;

            axios.post(url, alumno, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Insertando nuevo alumno");
                resolve(response)
            })
        })
    }

    updateAlumno(alumno) {
        return new Promise(function(resolve) {
            let request = "api/Alumnos/UpdateAlumnoToken";
            let url = Global.urlApiAlumnos + request;
            let token = Global.token;

            axios.put(url, alumno, { headers: { Authorization: "bearer " + token, "Content-Type": "application/json"  } }).then(response => {
                console.log("Insertando nuevo alumno");
                resolve(response)
            })
        })
    }

    findAlumno(idAlumno) {
        return new Promise(function(resolve) {
            let request = "api/Alumnos/FindAlumnoToken/" + idAlumno;
            let url = Global.urlApiAlumnos + request;
            let token = Global.token;

            axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Buscando alumno por id")
                resolve(response.data);
            })
        })
    }
    deleteAlumno(idAlumno) {
        return new Promise(function(resolve) {
            let request = "api/Alumnos/DeleteAlumnoToken/" + idAlumno;
            let url = Global.urlApiAlumnos + request;
            let token = Global.token;

            axios.delete(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Eliminando alumno por id");
                resolve(response)
            })
        })
    }

}

