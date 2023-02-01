import React from "react";
import axios from "axios";




export const getEtudiantById = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/etudiants/${idC}`)
        .then(res => res.data)
}
export const getProfesseurByIdEtudiant = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/etudiants/${idC}/encadrant`)
        .then(res => res.data)
}

export const getRDSByIdEtudiant = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/etudiants/${idC}/superviseur`)
        .then(res => res.data)
}

export const getReunionByIdEtudiant = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/etudiants/${idC}/reunion`)
        .then(res => res.data)
}

export const addEtudiant = (newEtudiant) => {
    return axios.post("http://localhost:8080/api/v1/etudiants", newEtudiant)
}

export const updateEtudiant  = (idC,newEtudiant) => {
    return  axios.put(`http://localhost:8080/api/v1/etudiants/${idC}`,newEtudiant)
}

export const deleteEtudiant  = (idC) => {
    return axios.delete(`http://localhost:8080/api/v1/etudiants/${idC}`)
}