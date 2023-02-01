import React, {useContext} from "react";
import TabBar from "../../components/UI/tab-bar";
import {columnsEtudiant, columnsProfesseur} from "../../data/starter";
import DynamicTable from "../../components/UI/dynamic-table";
import {useMutation, useQuery} from "react-query";
import {AuthContext} from "../../contex/AuthContext";
import axios from "axios";
import Spiner from "../../components/UI/Spiner";
import {ReactQueryDevtools} from "react-query/devtools";

const ProfAdmin = () => {

    const {jwt} = useContext(AuthContext);

    const config = {
        headers: {Authorization: `Bearer ${jwt}`}
    };
    const getAllProfesseur  = () => {
        return axios.get("http://localhost:8080/api/v1/professeurs", config)
            .then(res => res.data)
    }

    const response = useQuery(
        "AllProfesseurs",
        getAllProfesseur
    )

    const deleteProfesseur = (idC) => {
        return axios.delete(`http://localhost:8080/api/v1/professeurs/${idC}`, config)
    }

    const deleteFn = useMutation((idC) => {
        return deleteProfesseur (idC)
    })

    var flatten = require('flat')

    return (
        <>

            {response.isSuccess ?
                <DynamicTable columns={columnsProfesseur} target={"professeurs"}
                              dataOrigin={response.data.map(data => flatten(data, {delimiter: '_'}))}
                              deleteFunction={deleteFn} loading={false}/>
                : <Spiner/>
            }
            <ReactQueryDevtools/>
        </>
    )
};

export default ProfAdmin;