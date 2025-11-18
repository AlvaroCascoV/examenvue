import axios from "axios";
import Global from "@/Global";

export default class ServiceCubos {


    login(loginInfo) {
        return new Promise(function (resolve) {
            let request = "api/manage/Login"
            let url = Global.urlApiCubos + request
            axios.post(url, loginInfo).then(response => {
                resolve(response.data)
            })
        })
    }

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
            let request = "api/cubos/marcas"
            let url = Global.urlApiCubos + request
            let marcas = []
            axios.get(url).then(response => {
                marcas = response.data
                resolve(marcas)
            })
        })
    }

    findMarca(marca) {
        return new Promise(function (resolve) {
            let request = "api/Cubos/CubosMarca/" + marca
            let url = Global.urlApiCubos + request
            let cubosMarca = []
            axios.get(url).then(response => {
                cubosMarca = response.data
                resolve(cubosMarca)
            })
        })
    }
}