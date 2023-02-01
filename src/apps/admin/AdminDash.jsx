import React from "react";
import Container from "../../layouts/container";
import {adminLinks, columnsEtudiant, tabsTable} from "../../data/starter";
import TabBar from "../../components/UI/tab-bar";
import DynamicTable from "../../components/UI/dynamic-table";
import {Outlet, Route, Routes} from "react-router-dom";



const AdminDash = () => {

    return(
        <Container sidebar={adminLinks} role={"admin"} >
            <Outlet/>
        </Container>
    )

};

export default AdminDash;
