import axios from "axios";
import Global from "@/Global";

export default class SeriveAlumnos {

    loginCoches(user) {
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
}

