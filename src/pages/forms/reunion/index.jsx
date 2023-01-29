import React from "react";
import Email from "../../../components/forms/email";
import {ArrowLongDownIcon, ArrowLongRightIcon} from "@heroicons/react/24/outline";

const ReunionForm = () => {

    return(
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
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white pb-3">Name to be decided:</h3>
                    <div className=" grid md:grid-cols-2">
                        <div>
                            <div className="grid gap-6 mb-6">
                                <div>
                                    <label className="form-header">Titre</label>
                                    <input type="text" className="form-field" id="first_name" placeholder="Ajouter titre"/>
                                </div>
                                <div>
                                    <label className="form-header">Membre(s)</label>
                                    <input type="text" className="form-field" id="last_name" placeholder="Ajouter 3yit"/>
                                </div>
                                <div>
                                    <label className="form-header">Date</label>
                                    <div className=" flex flex-row gap-2 flex-wrap ">
                                        <input type="text" className="form-field" id="first_name" placeholder="start date"/>
                                        <input type="text" className="form-field" id="first_name" placeholder="Start time"/>
                                        <div className="flex justify-center w-full"><ArrowLongDownIcon className=" !w-6 !h-6"/></div>
                                        <input type="text" className="form-field" id="first_name" placeholder="end time"/>
                                    </div>

                                </div>
                                <div>
                                    <label className="form-header">Description</label>
                                    <textarea className="form-field resize-none" id="last_name" placeholder="description"/>
                                </div>
                            </div>
                        </div>
                        <div className="md:px-12">
                            <img src="img.png" alt={"placeholder"} className="w-full h-full"/>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    )
};

export default ReunionForm;