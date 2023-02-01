import React from "react";
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon} from "@heroicons/react/24/outline";
import {UserCircleIcon} from "@heroicons/react/24/outline";

export const adminLinks = [

    {
        name: 'Home',
        icon: <HomeIcon className="w-6 h-6 text-white"/>,
        route: "/Admin/Home",
    },
    {
        name: 'Accounts',
        icon: <UserCircleIcon className="w-6 h-6 text-white"/>,
        route: "/Admin/Accounts/professeur",
    },
    {
        name: 'Files',
        icon: <FolderIcon className="w-6 h-6 text-white"/>,
        route: "/Admin/Files",

    },
    {
        name: 'calendar',
        icon: <CalendarIcon className="w-6 h-6 text-white"/>,
        route: "/Admin/Calendar",

    },
    {
        name: 'Charts',
        icon: <ChartBarIcon className="w-6 h-6 text-white"/>,
        route: "/Admin/Charts",

    },
]

export const tabsTable = [
    {
        name: 'Etudiant',
        route: "/Admin/Accounts/etudiant",
    },
    {
        name: 'Professeur',
        route: "professeur",
    },
    {
        name: 'Responsable',
        route: "responsable",

    },
    {
        name: 'Admin',
        route: "admin",

    },
]


export const columnsProfesseur = [
    {
        name: 'Nom',
        selector: row => row.nom,
        sortable: true,
    },
    {
        name: 'Prenom',
        selector: row => row.prenom,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Programme',
        selector: row => row.programme_nom,
        sortable: true,
    },
    {
        name: 'Action',
        cell: row => (
            <a key={row.idC}
               className="bg-gray-200 font-semibold underline underline-offset-1 dark:bg-gray-700/80 p-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
               onClick={() => {
                   alert(`edited : ${row.idC}`)
               }}>Modifier</a>
        ),
        sortable: false,
    },
];

export const columnsAdmin = [
    {
        name: 'Nom',
        selector: row => row.nom,
        sortable: true,
    },
    {
        name: 'Prenom',
        selector: row => row.prenom,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Action',
        cell: row => (
            <a key={row.idC}
               className="bg-gray-200 font-semibold underline underline-offset-1 dark:bg-gray-700/80 p-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
               onClick={() => {
                   alert(`edited : ${row.idC}`)
               }}>Modifier</a>
        ),
        sortable: false,
    },
];

export const columnsEtudiant = [
    {
        name: 'Nom',
        selector: row => row.nom,
        sortable: true,
    },
    {
        name: 'Prenom',
        selector: row => row.prenom,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Niveau étude',
        selector: row => row.niveauEtude,
        sortable: true,
    },
    {
        name: 'Non superviseur',
        selector: row => row.superviseur_nom,
        sortable: true,
    },
    {
        name: 'Non encadrant',
        selector: row => row.professeur_nom,
        sortable: true,
    },
    {
        name: 'Programme',
        selector: row => row.programme_nom,
        sortable: true,
    },
    {
        name: 'Action',
        cell: row => (
            <a key={row.idC}
               className="bg-gray-200 font-semibold underline underline-offset-1 dark:bg-gray-700/80 p-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
               onClick={() => {
                   alert(`edited : ${row.idC}`)
               }}>Modifier</a>
        ),
        sortable: false,
    },
];