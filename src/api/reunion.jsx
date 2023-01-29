import React from "react";
import axios from "axios";


export const getReunionById = (id) => {
    return axios.get(`http://localhost:8080/api/v1/reunions/${id}`)
        .then(res => res.data)
}

export const addReunion = (newReunion) => {
    return axios.post("http://localhost:8080/api/v1/reunions",newReunion)
}

export const updateReunion = (id,newReunion) => {
    return axios.put(`http://localhost:8080/api/v1/reunions/${id}`,newReunion)

}

export const deleteReunion = (id) => {
    return axios.delete(`http://localhost:8080/api/v1/reunions/${id}`)

}