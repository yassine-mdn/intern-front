import React, {useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {Fragment} from 'react'
import DropDownFilter from "../drop-down-filter";


const SearchFilter = ({options,onFilter,filterText}) =>{





    return(


    <form className="self-start w-2/3 mr-auto flex">
        <label htmlFor="default-search"
               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white flex flex-row divide-x">Search</label>
        <div className="relative">
            <DropDownFilter options={options} selectedIndex={0} updateSelectedIndex={true}/>
        </div>
        <div className="relative grow ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-6 h-6 text-neutral-600 dark:text-gray-500 stroke-2"/>
            </div>
            <input
                   className="block w-full h-full p-4 pl-10 shadow-sm text-sm text-gray-900  rounded-r-xl bg-white focus:ring-main-500 focus:border-main-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-500 dark:focus:border-main-500"
                   id="search"
                   type="text"
                   placeholder="Filter By Name"
                   aria-label="Search Input"
                   value={filterText}
                   onChange={onFilter}/>
        </div>
    </form>


);
}
export default SearchFilter;