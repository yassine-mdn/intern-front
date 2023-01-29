import React, {useContext, useEffect, useState} from "react";
import NotificationButton from "../notification-button";
import Avatar from "../avatar";
import MessagesButton from "../messages-button";
import {Bars3Icon, ChevronDoubleLeftIcon} from "@heroicons/react/24/outline";
import {useStateContext} from "../../../contex/ContextProvider";
import {useLocation} from "react-router-dom";
import {ShowSidebarContext} from "../../../contex/ShowSidebarContext";

const Topbar = () => {

    const location = useLocation();
    const [target, setTarget] = useState("etudiant")

    const {_,setVisible} = useContext(ShowSidebarContext)


    useEffect(() => {
        location.pathname.includes("professeur") ? setTarget("Professeur")
            : location.pathname.includes("admin") ? setTarget("Admin")
                : location.pathname.includes("responsable") ? setTarget("Responsables de stage")
                    : location.pathname.includes("etudiant") && setTarget("Etudiant")
    }, [location])

    return (
        <div
            className="fixed z-[15] top-0 left-0 w-full xl:ml-[15%] xl:w-[85%] bg-white dark:bg-gray-800 h-16 shadow-md shadow-neutral-300/20 dark:shadow-gray-900/20 flex justify-between items-center px-4 py-4 md:px-10 overflow-hiden">
            <div className="flex gap-2 items-center">
                <button className="bg-transparent h-8 w-8" onClick={() => setVisible(true)}>
                    <Bars3Icon className="text-gray-900 dark:text-white text-xl"/>
                </button>
                <h1 className="text-gray-800 dark:text-white text-xl pb-1 font-semibold">{target}</h1>
            </div>
            <div className="flex gap-5 items-center">
                <NotificationButton/>
                <MessagesButton/>
                <Avatar firstname="Yassine" lastname="Mouddene"/>
            </div>
        </div>
    );
};
export default Topbar;