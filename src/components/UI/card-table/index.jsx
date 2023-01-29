import React, {Fragment} from "react";

const CardTable = ({columns, data = [], progressComponent, onCardClick}) => {

    return (
        <div className="overflow-y-scroll grid w-full gap-4 p-2 scrollbar-hide place-items-start ">

            {data.map((row) => (
                <div key={row.idC}
                     className="grid w-full rounded-lg bg-white drop-shadow-md grid grid-cols-1 gap-2  p-2">
                    {columns.map((column) => {
                        const fullName = row.nom + " " + row.prenom
                        return (
                            <Fragment key={column.name}>
                                {(column.name === "Nom") ?(
                                    <div key={"nom_complet"}>
                                        <span key={"nom_complet"} className="place-items-center font-bold text-md" >
                                            {fullName}
                                        </span>
                                    </div>)
                                    :(column.name === "Prenom" || column.name ==="Niveau étude") ? (<></>)
                                    :(column.name === "Non superviseur") ? ( <div key={"nom_complet"}>
                                        <span key={"nom_complet"} className="place-items-center font-semibold text-md" >
                                            Superviser par: <span className="font-medium text-gray-800">{row.superviseur_nom} {row.superviseur_prenom}</span>
                                        </span>
                                            </div>)
                                    :(column.name === "Non encadrant") ? ( <div key={"nom_complet"}>
                                        <span key={"nom_complet"} className="place-items-center font-semibold text-md" >
                                            Encardré par:   <span className="font-medium text-gray-800">{row.professeur_nom} {row.professeur_prenom}</span>
                                        </span>
                                                </div>)
                                    :(column.name === "Email" )?
                                    (<div key={column.name}>
                                    <span key={column.name}
                                          className={"font-semibold text-gray-400"}>
                                        {column.selector && column.selector(row)}
                                    </span>
                                    </div>)
                                    : (column.name === "Programme") ?(
                                        <div key={column.name}>
                                            <span key={column.name}
                                                  className={"bg-main-300 p-1 px-3 rounded-full text-sm text-main-50 drop-shadow-sm"}>
                                                {column.selector && column.selector(row)} - {row.niveauEtude}
                                            </span>
                                        </div>)
                                    : (<></>)
                                }
                            </Fragment>
                        )
                    }
                    )}
        </div>
    )
)
}


</div>
)
};

export default CardTable;