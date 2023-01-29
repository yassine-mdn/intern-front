import React, {useState, useEffect} from 'react';
import Select from "react-tailwindcss-select";
import placeholder from "lodash/fp/placeholder";
import {ArrowUpTrayIcon, DocumentIcon} from "@heroicons/react/24/outline";

function FileSelector({submit, options = [placeholder]}) {
    const [destinataire, setDestinataire] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleDestinataire = value => {
        setDestinataire(value);
    };

    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
        if (options !== [placeholder]) setLoading(false)
    }, [options])

    const handleSubmit = event => {
        event.preventDefault();

        // Envoi du fichier et des informations de destinataire à une API
        const formData = new FormData();
        formData.append('dest', destinataire);
        formData.append('file', selectedFile);
        submit(formData)
    };

    return (
        <div className="card grid place-items-center h-full">
            <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
                <span className="form-header">Destinataire:</span>
                <Select value={destinataire}
                        onChange={handleDestinataire}
                        isSearchable={true}
                        loading={loading}
                        options={options} classNames={{
                    menuButton: ({isDisabled}) => (
                        `flex border border-transparent bg-gray-100 text-gray-900 text-base rounded-xl hover:border-main-500 block w-full p-1 dark:bg-gray-700/30 dark:placeholder-gray-400 dark:text-white ${
                            isDisabled
                                ? "bg-gray-200"
                                : "hover:border-main-500 focus:border-main-500 focus:ring focus:ring-2 focus:ring-main-500"
                        }`
                    ),
                    menu: "absolute z-10 w-full bg-gray-50 dark:bg-gray-700 drop-shadow-md space-y-2  rounded-xl py-1 mt-1.5 text-sm text-gray-700",
                    listItem: ({isSelected}) => (
                        `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded-xl my-2 ${
                            isSelected
                                ? `text-white bg-secondary-400 hover:bg-secondary-500/90`
                                : `text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800/30 hover:text-secondary-500`
                        }`
                    ),
                    searchBox: "bg-gray-100 text-gray-900  text-base rounded-xl pl-10 hover:border-main-500 block w-full p-2 dark:bg-gray-800/50 dark:text-white",
                    searchContainer: ""
                }}/>
                <br/>
                <span className="form-header">
                    Fichier:
                </span>
                <div className="flex flex-col align-center gap-4">
                    <label className="form-field border-2 border-dashed border-main-400 grid place-items-center text-gray-500 py-24">
                        {selectedFile === null?
                            <>
                                <ArrowUpTrayIcon className="h-12 w-12"/>
                                Click to upload your file
                            </>:
                            <>
                                <DocumentIcon className="h-12 w-12"/>
                                {selectedFile.name}
                            </>

                        }

                        <input
                            id="file_input" type="file" onChange={handleFileChange}/>
                        <br/>
                    </label>

                    <button type="submit" className="button-main mx-auto">Envoyer</button>
                </div>

            </form>
        </div>

    );
}

export default FileSelector;