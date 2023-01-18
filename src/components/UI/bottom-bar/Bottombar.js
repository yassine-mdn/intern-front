import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faCalendar, faUser, faMagnifyingGlass, faList} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faHouse, faCalendar, faUser, faMagnifyingGlass, faList)
const Bottombar = () => {

    return (
        <div className=" sm:hidden bg-gradient-to-t from-main-600 to-main-500
         fixed bottom-0 w-full h-20 flex space-x-2 justify-center items-center rounded-tl-lg rounded-tr-lg shadow-2xl px-2 py-4 gap-2" role="group">
            <button className="flex flex-col w-[4.5rem] h-12 justify-center items-center p-1 focus:rounded-lg focus:bg-white focus:bg-opacity-10">
                <FontAwesomeIcon icon="fa-solid fa-house" className="text-white"/>
                <h6 className="text-sm text-white font-semibold">Home</h6>
            </button>
            <button className="flex flex-col w-[4.5rem] h-12 justify-center items-center  p-1 focus:rounded-lg focus:bg-white focus:bg-opacity-10">
                <FontAwesomeIcon icon="fa-solid fa-user" className="text-white"/>
                <h6 className="text-sm  text-white font-semibold">User</h6>
            </button>
            <button className="flex flex-col  w-[4.5rem] h-12 justify-center items-center  p-1 focus:rounded-lg focus:bg-white focus:bg-opacity-10">
                <FontAwesomeIcon icon="fa-solid fa-list" className="text-white"/>
                <h6 className="text-sm  text-white font-semibold">Dashboard</h6>
            </button>
            <button className="flex flex-col w-[4.5rem] h-12 justify-center items-center  p-1 focus:rounded-lg focus:bg-white focus:bg-opacity-10">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="text-white"/>
                <h6 className="text-sm  text-white font-semibold">Search</h6>
            </button>
            <button className="flex flex-col w-[4.5rem] h-12 justify-center items-center  p-1 focus:rounded-lg focus:bg-white focus:bg-opacity-10">
                <FontAwesomeIcon icon="fa-solid fa-calendar" className="text-white"/>
                <h6 className="text-sm  text-white font-semibold">Events</h6>
            </button>
        </div>
    );
};

export default Bottombar;