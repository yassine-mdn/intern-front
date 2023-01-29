import React from "react";
import axios from "axios";

export const getAllProgrammes = () => {
    return axios.get("http://localhost:8080/api/v1/programmes")
        .then(res => res.data)
}

export const getProgrammeById = (id) => {
    return axios.get(`http://localhost:8080/api/v1/programmes/${id}`)
        .then(res => res.data)
}

export const addProgramme = (newProg) => {
    return axios.post("http://localhost:8080/api/v1/programmes",newProg)
}

export const updateProgramme = (id,newProg) => {
    return axios.put(`http://localhost:8080/api/v1/programmes/${id}`,newProg)

}

export const deleteProgramme = (id) => {
    return axios.delete(`http://localhost:8080/api/v1/programmes/${id}`)

}