import React from "react";
import axios from "axios";

export const getAllProfesseurs = () => {
    return axios.get("http://localhost:8080/api/v1/professeurs")
        .then(res => res.data)
}

export const getProfesseurById = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/professeurs/${idC}`)
        .then(res => res.data)
}

export const getEtudiantByIdProfesseur = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/professeurs/${idC}/etudiant`)
        .then(res => res.data)
}

export const addProfesseur = (newProfesseur) => {
    console.log(newProfesseur)
    return axios.post("http://localhost:8080/api/v1/professeurs", newProfesseur)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export const updateProfesseur = (idC, newProfesseur) => {
    return axios.put(`http://localhost:8080/api/v1/professeurs/${idC}`, newProfesseur)
}

export const deleteProfesseur = (idC) => {
    return axios.delete(`http://localhost:8080/api/v1/professeurs/${idC}`)
}
