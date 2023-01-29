import React from "react";

const EtablissementList = ({listEta = []}) => {

    return(
        <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {listEta.map((etablissement) => (
                <div className="card p-0 grid" key={etablissement.idEta}>
                    <img src={"https://medias24.com/content/uploads/2021/07/uir1.jpg"} className="rounded-t-2xl"/>
                    <div className="p-4">
                        <label className="form-header">{etablissement.nom}</label>
                        <div className="flex flex-wrap gap-2">
                            {etablissement.programmes.map((programme)=>(
                                <label key={programme.idProgramme} className="bg-main-300 dark:bg-main-700 p-1 px-3 rounded-full text-sm text-main-50 drop-shadow-sm">{programme.nom}</label>
                            ))}

                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default EtablissementList