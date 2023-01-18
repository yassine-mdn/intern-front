import React, {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const DropDownFilter = ({options,selectedIndex,updateSelectedIndex}) => {

    return(
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="flex block items-center p-4 shadow-sm text-sm font-semibold text-gray-900  rounded-l-xl bg-white focus:ring-main-500 focus:border-main-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-500 dark:focus:border-main-500">
                    By {options[selectedIndex].name}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            options.map((value,index) => (
                                <Menu.Item>
                                    {({active}) => (
                                        <a
                                            href="#"
                                            key={index}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={updateSelectedIndex}
                                        >
                                            {value.name}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DropDownFilter;