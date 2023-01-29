import React from "react";
import {adminLinks} from "../../../data/starter";
import {NavLink} from "react-router-dom";

const Bottombar = ({links = adminLinks}) => {

    const activeLink = 'flex flex-col justify-center w-11/12 h-16 items-center p-1  focus:bg-opacity-10 gap-1 text-white text-sm';
    const normalLink = 'flex flex-col justify-center w-11/12 h-16 items-center p-1 focus:bg-opacity-10 gap-1 text-white text-sm opacity-30 ';

    return (
        <div className=" sm:hidden bg-gradient-to-t from-main-600 to-main-500
         fixed bottom-0 w-full h-20 flex justify-center items-center shadow-2xl px-2 py-4 gap-2" role="group">
            {links.map((link) => (

                <NavLink
                    key={link.name}
                    to ={link.route}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    {link.icon}
                    <h6 className="text-xs  text-white font-semibold">{link.name}</h6>
                </NavLink>))}
        </div>
    );
};

export default Bottombar;