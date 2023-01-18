import React from "react";
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon} from "@heroicons/react/24/outline";
import {UserCircleIcon} from "@heroicons/react/24/outline";

export const admin = [
    {
        link: [
            {
                name: 'Home',
                icon: <HomeIcon className="w-6 h-6 text-white"/>,
            },
        ],
    },
    {
        link: [
            {
                name: 'Accounts',
                icon: <UserCircleIcon className="w-6 h-6 text-white"/>
            },
        ],
    },
    {
        link: [
            {
                name: 'Files',
                icon: <FolderIcon className="w-6 h-6 text-white"/>
            },
        ],
    },
    {
        link: [
            {
                name: 'calendar',
                icon: <CalendarIcon className="w-6 h-6 text-white"/>
                ,
            },
        ],
    },
    {
        link: [
            {
                name: 'Charts',
                icon: <ChartBarIcon className="w-6 h-6 text-white"/>
            },
        ],
    },
]
