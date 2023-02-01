import React from "react";
import {ArrowDownTrayIcon, DocumentIcon} from "@heroicons/react/24/outline";

const FileList = ({files=[
    {
        "idF": 1,
        "nom": "Screenshot_20221218_230113.png",
        "type": "image/png",
        "size": "1.3Mb",
        "dateUpload": "2023-01-28T14:57:57.092+00:00",
        "sender": {
            "id": 1,
            "admin": {
                "idC": 1,
                "nom": "mouddene",
                "prenom": "yassine",
                "email": "yassinemouddene@gmail.com"
            },
            "professeur": null,
            "etudiant": null,
            "rsd": null
        },
        "receiver": {
            "id": 2,
            "admin": null,
            "professeur": null,
            "etudiant": null,
            "rsd": {
                "idC": 2,
                "nom": null,
                "prenom": null,
                "email": "test@gmail.com"
            }
        }
    },  {
        "idF": 1,
        "nom": "Screenshot_20221218_230113.png",
        "type": "image/png",
        "size": "1.3Mb",
        "dateUpload": "2023-01-28T14:57:57.092+00:00",
        "sender": {
            "id": 1,
            "admin": {
                "idC": 1,
                "nom": "mouddene",
                "prenom": "yassine",
                "email": "yassinemouddene@gmail.com"
            },
            "professeur": null,
            "etudiant": null,
            "rsd": null
        },
        "receiver": {
            "id": 2,
            "admin": null,
            "professeur": null,
            "etudiant": null,
            "rsd": {
                "idC": 2,
                "nom": null,
                "prenom": null,
                "email": "test@gmail.com"
            }
        }
    },  {
        "idF": 1,
        "nom": "Screenshot_20221218_230113.png",
        "type": "image/png",
        "size": "1.3Mb",
        "dateUpload": "2023-01-28T14:57:57.092+00:00",
        "sender": {
            "id": 1,
            "admin": {
                "idC": 1,
                "nom": "mouddene",
                "prenom": "yassine",
                "email": "yassinemouddene@gmail.com"
            },
            "professeur": null,
            "etudiant": null,
            "rsd": null
        },
        "receiver": {
            "id": 2,
            "admin": null,
            "professeur": null,
            "etudiant": null,
            "rsd": {
                "idC": 2,
                "nom": null,
                "prenom": null,
                "email": "test@gmail.com"
            }
        }
    },  {
        "idF": 1,
        "nom": "Screenshot_20221218_230113.png",
        "type": "image/png",
        "size": "1.3Mb",
        "dateUpload": "2023-01-28T14:57:57.092+00:00",
        "sender": {
            "id": 1,
            "admin": {
                "idC": 1,
                "nom": "mouddene",
                "prenom": "yassine",
                "email": "yassinemouddene@gmail.com"
            },
            "professeur": null,
            "etudiant": null,
            "rsd": null
        },
        "receiver": {
            "id": 2,
            "admin": null,
            "professeur": null,
            "etudiant": null,
            "rsd": {
                "idC": 2,
                "nom": null,
                "prenom": null,
                "email": "test@gmail.com"
            }
        }
    },  {
        "idF": 1,
        "nom": "Screenshot_20221218_230113.png",
        "type": "image/png",
        "size": "1.3Mb",
        "dateUpload": "2023-01-28T14:57:57.092+00:00",
        "sender": {
            "id": 1,
            "admin": {
                "idC": 1,
                "nom": "mouddene",
                "prenom": "yassine",
                "email": "yassinemouddene@gmail.com"
            },
            "professeur": null,
            "etudiant": null,
            "rsd": null
        },
        "receiver": {
            "id": 2,
            "admin": null,
            "professeur": null,
            "etudiant": null,
            "rsd": {
                "idC": 2,
                "nom": null,
                "prenom": null,
                "email": "test@gmail.com"
            }
        }
    }

],getRecieved = true}) => {

    return (
        <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">

            {files.map((file)=> (
                <div key={file.idF} className="card flex flex-row w-full h-20 gap-2 p-2">
                <div className="grid place-items-center rounded-xl w-16 h-16 bg-main-400 dark:bg-main-700 drop-shadow-md">
                    <DocumentIcon className="h-12 w-12 text-white"/>
                </div>
                    <div className="flex flex-col ">
                        <span className="form-header">{file.nom}</span>
                        <div className="flex flex-wrap gap-2 items-center">
                            <span className="sub-header text-base">{file.sender.admin.nom} {file.sender.admin.prenom}</span>
                            <span className="sub-header">{file.size}</span>
                            <span className="sub-header">{new Date(file.dateUpload).toLocaleString('fr')}</span>
                        </div>
                    </div>
                    <button className="ml-auto bg-transparent grid place-items-center mr-2">
                        <ArrowDownTrayIcon className="h-12 w-12 dark:text-white/70 text-gray-900/70"/>
                    </button>
                </div>
            ))}
        </div>
    );

};

export default FileList;