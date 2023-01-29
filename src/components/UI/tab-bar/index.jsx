import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";
import {tabsTable} from "../../../data/starter";

const TabBar = ({tabs = tabsTable}) => {


    const activeTab ="h-full flex flex-col border-[1px] border-main-500 bg-main-500 md:border-0 md:bg-transparent rounded-full px-4 md:px-2 items-center justify-center md:justify-end md:gap-4 text-sm md:text-lg font-semibold text-white md:text-main-500 md:after:bottom-line";
    const normalTab ="h-full flex flex-col justify-center border-[1px] border-gray-400 text-gray-400 dark:border-gray-500 dark:text-gray-500 md:border-0 rounded-full px-4 md:px-2  text-sm md:text-lg hover:text-main-400";

    return(


    <div className="fixed  top-16 left-0 z-10 w-full xl:ml-[15%] xl:w-[85%] h-auto text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 overflow-x-scroll">
     <ul className="flex flex-row bg-white dark:bg-gray-800 gap-3 md:gap-6 h-12 md:h-16 shadow-md shadow-neutral-300/20 dark:shadow-gray-900/20 py-2 md:py-0  items-center px-3  md:px-6 overflow-x-scroll scrollbar-hide">
         {tabs.map((tab) => {
             return (
                 <NavLink
                     key={tab.name}
                     className={({ isActive }) => (isActive ? activeTab : normalTab)}
                     to={tab.route}
                 >
                     {tab.name}
                     {(
                         <motion.div
                             key={`animated-${tab}`}
                             layoutId="tabSelector"
                             className="absolute left-0 bg-red-300 z-[-1] w-full h-3Z"
                         />
                     )}
                 </NavLink>
             );
         })}
     </ul>
    </div>

);
}
 export default TabBar