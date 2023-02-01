import React, {useContext} from "react";
import TabBar from "../../components/UI/tab-bar";
import {columnsEtudiant, tabsTable} from "../../data/starter";
import DynamicTable from "../../components/UI/dynamic-table";
import {useMutation, useQuery} from "react-query";
import flatten from "flat";
import Spiner from "../../components/UI/Spiner";
import {ReactQueryDevtools} from "react-query/devtools";
import axios from "axios";
import {AuthContext} from "../../contex/AuthContext";

const EtudiantAdmin = () => {

    const {jwt} = useContext(AuthContext);

    const config = {
        headers: {Authorization: `Bearer ${jwt}`}
    };
    const getAllEtudiants = () => {
        return axios.get("http://localhost:8080/api/v1/etudiants", config)
            .then(res => res.data)
    }

    const response = useQuery(
        "AllEtudiants",
        getAllEtudiants
    )

    const deleteEtudiant = (idC) => {
        return axios.delete(`http://localhost:8080/api/v1/etudiants/${idC}`, config)
    }

    const deleteFn = useMutation((idC) => {
        return deleteEtudiant(idC)
    })

    var flatten = require('flat')

    return (
        <>

            {response.isSuccess ?
                <DynamicTable columns={columnsEtudiant} target={"Etudiant"}
                                                dataOrigin={response.data.map(data => flatten(data, {delimiter: '_'}))}
                                                deleteFunction={deleteFn} loading={false}/>
                : <Spiner/>
            }
            <ReactQueryDevtools/>
        </>
    )
};

export default EtudiantAdmin;