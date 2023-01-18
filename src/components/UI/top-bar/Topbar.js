import React from "react";
import NotificationButton from "../notification-button";
import Avatar from "../avatar/Avatar";
import MessagesButton from "../messages-button/MessagesButton";
import {ChevronDoubleLeftIcon} from "@heroicons/react/24/outline";

const Topbar = () => {

    return (
        <div
            className="fixed top-0 left-0 w-full xl:ml-[15%] xl:w-[85%] bg-white dark:bg-gray-800 h-16 shadow-md shadow-neutral-300/20 dark:shadow-gray-900/20 flex justify-between items-center px-4 py-4 md:px-10 overflow-hiden">
            <div className="flex gap-2 items-center">
                <button>
                    <ChevronDoubleLeftIcon className="text-gray-900 dark:text-white text-xl "/>
                </button>
                <h1 className="text-gray-800 dark:text-white text-xl pb-1 font-semibold">Student</h1>
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