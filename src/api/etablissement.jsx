import React from "react";
import axios from "axios";


export const getAllEtablissements = () => {
    return axios.get("http://localhost:8080/api/v1/etablissements")
        .then(res => res.data)
}

export const getEtablissementById = (id) => {
    return axios.get(`http://localhost:8080/api/v1/etablissements/${id}`)
        .then(res => res.data)
}

export const addEtablissement = (nom) => {
    return axios.post("http://localhost:8080/api/v1/etablissements",nom)
}

export const updateEtablissement = (id,nom) => {
    return axios.put(`http://localhost:8080/api/v1/etablissements/${id}`,nom)

}

export const deleteEtablissement = (id) => {
    return axios.delete(`http://localhost:8080/api/v1/etablissements/${id}`)

}