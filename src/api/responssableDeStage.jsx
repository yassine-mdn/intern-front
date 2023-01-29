import React from "react";
import axios from "axios";


export const getAllResponssablesDeStage = () => {
    return axios.get("http://localhost:8080/api/v1/responssables")
        .then(res => res.data)
}

export const getResponssableDeStageById = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/responssables/${idC}`)
        .then(res => res.data)
}
export const getEtudiantByIdEncadrant = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/responssables/${idC}/etudiant`)
        .then(res => res.data)
}

export const getReunionByIdEncadrant = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/responssables/${idC}/reunion`)
        .then(res => res.data)
}

export const addResponssableDeStage = (newRSD) => {
    return axios.post("http://localhost:8080/api/v1/responssables", newRSD)
}

export const updateResponssableDeStage = (idC,newRSD) => {
    return  axios.put(`http://localhost:8080/api/v1/responssables/${idC}`,newRSD)
}

export const deleteResponssableDeStage = (idC) => {
    return axios.delete(`http://localhost:8080/api/v1/responssables/${idC}`)
}