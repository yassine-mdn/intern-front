import React, {useContext} from "react";
import {useQuery} from "react-query";
import {getAllEtablissements} from "../../../api/etablissement";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../contex/AuthContext";
import axios from "axios";

const EtablissementList = () => {

    const {jwt,user} = useContext(AuthContext);

    const config = {
        headers: { Authorization: `Bearer ${jwt}` }
    };
    const getAllEtablissements = () => {
        return axios.get("http://localhost:8080/api/v1/etablissements",config)
            .then(res => res.data)
    }

    const listEta = useQuery(
        "getAllEtablissement",
        getAllEtablissements
    )


    return(

        <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {listEta.isSuccess&& listEta.data.map((etablissement) => (
                <NavLink to={`/Admin/Etablissement/${etablissement?.idEta}`} className="card p-0 grid" key={etablissement?.idEta}>
                    <img src={"https://medias24.com/content/uploads/2021/07/uir1.jpg"} className="rounded-t-2xl"/>
                    <div className="p-4">
                        <label className="form-header">{etablissement.nom}</label>
                        <div className="flex flex-wrap gap-2">
                            {etablissement?.programmes.map((programme)=>(
                                <label key={programme?.idProgramme} className="bg-main-300 dark:bg-main-700 p-1 px-3 rounded-full text-sm text-main-50 drop-shadow-sm">{programme?.nom}</label>
                            ))}

                        </div>
                    </div>
                </NavLink>
            ))}


        </div>
    )
}

export default EtablissementList