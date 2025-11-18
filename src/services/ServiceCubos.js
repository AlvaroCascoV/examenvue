import axios from "axios";
import Global from "@/Global";

export default class ServiceCubos {
    getCubos() {
        return new Promise(function (resolve) {
            let request = "api/cubos"
            let url = Global.urlApiCubos + request
            let cubos = []
            axios.get(url).then(response => {
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getMarcas() {
        return new Promise(function (resolve) {
            let request = "api/marcas"
            let url = Global.urlApiCubos + request
            let marcas = []
            axios.get(url).then(response => {
                marcas = response.data
                resolve(marcas)
            })
        })
    }
}