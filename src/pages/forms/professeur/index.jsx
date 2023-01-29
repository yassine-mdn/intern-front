import React, {useState} from "react";
import Email from "../../../components/forms/email";
import Select from "react-tailwindcss-select";


const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const ProfesseurForm = () => {


    const [animal, setAnimal] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };


    return (
        <div>
            <div className="fixed  top-16 left-0 z-10 h-[4.5rem] w-full xl:ml-[15%] xl:w-[85%]  bg-white dark:bg-gray-800 shadow-md  px-4 py-2.5 flex justify-between">
                <button
                    className="bg-gray-200 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-700 p-2.5 px-6 rounded-xl font-semibold text-lg text-gray-900 dark:text-gray-400 shadow-sm">Annuler
                </button>
                <button
                    className="bg-secondary-500  hover:bg-secondary-600 active:bg-secondary-600 p-2.5 px-6 rounded-xl font-semibold text-lg text-white shadow-sm">Publier les changements
                </button>
            </div>
            <form className="mt-[4.5rem] w-full grid w-full gap-4 p-2 scrollbar-hide place-items-start scrollbar-hide">
                <div className="bg-white dark:bg-gray-800 w-full rounded-2xl drop-shadow-md p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white pb-3">Information de base:</h3>
                    <div className=" grid md:grid-cols-2">
                        <div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label className="form-header">First
                                        name</label>
                                    <input type="text" className="form-field" id="first_name" placeholder="Yassine"/>
                                </div>
                                <div>
                                    <label className="form-header">Last
                                        name</label>
                                    <input type="text" className="form-field" id="last_name" placeholder="Mouddene"/>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label
                                    className="form-header">email</label>
                                <Email id="email" className="form-field"/>
                            </div>
                        </div>
                        <div className="md:px-12">
                            <h6 className="px-4 p-2 mb-2 text-base font-semibold text-gray-900 dark:text-white">Tips:</h6>
                            <span className="text-sm font-medium text-gray-500/80 dark:text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel varius est, eu ornare ex. Mauris ultrices enim sed felis aliquet imperdiet. Nullam tincidunt at diam a interdum.</span>
                        </div>
                    </div>


                </div>
                <div className="bg-white dark:bg-gray-800  w-full rounded-2xl drop-shadow-md p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white pb-3">Securité:</h3>
                    <div className=" grid md:grid-cols-2">
                        <div>
                            <div className="mb-6">
                                <label
                                    className="form-header">Password</label>
                                <input type="password" className="form-field" id="password" placeholder="**********"/>
                            </div>
                            <div className="mb-6">
                                <label className="form-header">Confirm
                                    password</label>
                                <input type="password" className="form-field" placeholder="**********"/>
                            </div>
                        </div>
                        <div className="md:px-12">
                            <h6 className="px-4 p-2 mb-2 text-base font-semibold text-gray-900 dark:text-white">Tips:</h6>
                            <div>
                                <span className="text-sm font-medium text-gray-500/80 dark:text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel varius est, eu ornare ex. Mauris ultrices enim sed felis aliquet imperdiet. Nullam tincidunt at diam a interdum.</span>
                            </div>
                            <button
                                className="mt-4 w-full md:w-auto md:mt-11 bg-secondary-500  hover:bg-secondary-600 active:bg-secondary-600 p-2.5 px-6 rounded-xl font-semibold text-lg text-white shadow-sm">Generer
                                un mot de passe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800  w-full rounded-2xl drop-shadow-md p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white pb-3">Autre details:</h3>
                    <div className=" grid md:grid-cols-2">
                        <div>
                            <div className="mb-6">
                                <label
                                    className="form-header">Programme:</label>
                                <Select value={animal}
                                        onChange={handleChange}
                                        isSearchable={true}
                                        options={options} classNames={{
                                    menuButton: ({ isDisabled }) => (
                                        `flex border border-transparent bg-gray-100 text-gray-900 text-base rounded-xl hover:border-main-500 block w-full p-1 dark:bg-gray-700/30 dark:placeholder-gray-400 dark:text-white ${
                                            isDisabled
                                                ? "bg-gray-200"
                                                : "hover:border-main-500 focus:border-main-500 focus:ring focus:ring-2 focus:ring-main-500"
                                        }`
                                    ),
                                    menu: "absolute z-10 w-full bg-gray-50 dark:bg-gray-700 drop-shadow-md space-y-2  rounded-xl py-1 mt-1.5 text-sm text-gray-700",
                                    listItem: ({ isSelected }) => (
                                        `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded-xl my-2 ${
                                            isSelected
                                                ? `text-white bg-secondary-400 hover:bg-secondary-500/90`
                                                : `text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800/30 hover:text-secondary-500`
                                        }`
                                    ),
                                    searchBox: "bg-gray-100 text-gray-900  text-base rounded-xl pl-10 hover:border-main-500 block w-full p-2 dark:bg-gray-800/50 dark:text-white",
                                    searchContainer:""
                                }}/>                            </div>
                        </div>
                        <div className="md:px-12">
                            <h6 className="px-4 p-2 mb-2 text-base font-semibold text-gray-900 dark:text-white">Tips:</h6>
                            <span className="text-sm font-medium text-gray-500/80 dark:text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel varius est, eu ornare ex. Mauris ultrices enim sed felis aliquet imperdiet. Nullam tincidunt at diam a interdum.</span>

                        </div>
                    </div>
                </div>
            </form>
        </div>


    )
};

export default ProfesseurForm;