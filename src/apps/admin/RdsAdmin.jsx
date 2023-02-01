import React from "react";
import TabBar from "../../components/UI/tab-bar";
import {columnsProfesseur, tabsTable} from "../../data/starter";
import DynamicTable from "../../components/UI/dynamic-table";
import {useMutation, useQuery} from "react-query";
import {deleteResponssableDeStage, getAllResponssablesDeStage} from "../../api/responssableDeStage";

const RdsAdmin = () => {

    const response = useQuery(
        "AllProfs",
        getAllResponssablesDeStage
    )

    const deleteFn = useMutation((idC) => {
        return deleteResponssableDeStage(idC)
    })

    var flatten = require('flat')

    return(
        <>

            <DynamicTable columns={columnsProfesseur} target={"Professeur"} dataOrigin={flatten(response.data,{delimiter: true})} deleteFunction={deleteFn} loading={response.isLoading}/>
        </>
    )
};

export default RdsAdmin;