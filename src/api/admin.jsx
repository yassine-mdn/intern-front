import React from "react";
import axios from "axios";


export const getAllAdmins = () => {
    return axios.get("http://localhost:8080/api/v1/admins")
        .then(res => res.data)
}

export const getAdminById = (idC) => {
    return axios.get(`http://localhost:8080/api/v1/admins/${idC}`)
        .then(res => res.data)
}
export const addAdmin = (newAdmin) => {
    return axios.post("http://localhost:8080/api/v1/admins", newAdmin)
}

export const updateAdmin = (idC,newAdmin) => {
    return  axios.put(`http://localhost:8080/api/v1/admins/${idC}`,newAdmin)
}

export const deleteAdmin = (idC) => {
    console.log(`http://localhost:8080/api/v1/admins/${idC}`)
    //return axios.delete(`http://localhost:8080/api/v1/admins/${idC}`)
}