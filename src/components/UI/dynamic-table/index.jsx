import React, {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';
import SearchFilter from "../search-filter";

const DynamicTable = () => {

    const columns = [
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
            selector: row => row.programme,
            sortable: true,
        },
    ];

    const data = [
        {
            "idC": 1,
            "nom": "Najib",
            "prenom": "Mehdi",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 2,
            "nom": "Guermah",
            "prenom": "Basma",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 3,
            "nom": "Ghogho",
            "prenom": "Mounir",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 4,
            "nom": "Cherqui",
            "prenom": "Othmane",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 5,
            "nom": "Nada",
            "prenom": "Sbihi",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 1,
            "nom": "Najib",
            "prenom": "Mehdi",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 2,
            "nom": "Guermah",
            "prenom": "Basma",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 3,
            "nom": "Ghogho",
            "prenom": "Mounir",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 4,
            "nom": "Cherqui",
            "prenom": "Othmane",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 5,
            "nom": "Nada",
            "prenom": "Sbihi",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 1,
            "nom": "Najib",
            "prenom": "Mehdi",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 2,
            "nom": "Guermah",
            "prenom": "Basma",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 3,
            "nom": "Ghogho",
            "prenom": "Mounir",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 4,
            "nom": "Cherqui",
            "prenom": "Othmane",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        },
        {
            "idC": 5,
            "nom": "Nada",
            "prenom": "Sbihi",
            "email": "hadi-anouar.mokhtari@uir.ac.ma",
            "programme": "info"
        }
    ]

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [selectedRows, setSelectedRows] = React.useState([]);

    let handleClick = (index) => {
        setSelectedIndex(index);
    };

    const filteredItems = data.filter(
        item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {



        return (
            <>
                <SearchFilter options={columns} onFilter={e => setFilterText(e.target.value)}
                              filterText={filterText}/>

            </>

        );
    }, [filterText, resetPaginationToggle]);

    const paginationComponentOptions = {
        noRowsPerPage: true,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    return (
        <DataTable columns={columns} data={filteredItems} selectableRows={true} right={true} responsive={true}
                   fixedHeader={true} fixedHeaderScrollHeight="100%" subHeader subHeaderComponent={subHeaderComponentMemo} pagination paginationComponentOptions={paginationComponentOptions}
        />
    );
};

export default DynamicTable;