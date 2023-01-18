import React, {useEffect, useState} from "react";
import NotificationButton from "../notification-button";
import MessagesButton from "../messages-button/MessagesButton";
import Avatar from "../avatar/Avatar";

const Contentcontainer = () => {

    const [visible, setVisible] = useState(false)

    const changeVisible = () => {
        setVisible(prevVisible => !prevVisible);
    };

    return (
        <div className="flex h-full">
            {visible && (
                <div>
                    <div className="bg-neutral-300/80 backdrop-blur-sm w-screen h-full sm:hidden"
                         onClick={changeVisible}/>
                    <div
                        className="rounded-r-3xl flex md:rounded-none fixed top-0 left-0 w-64 h-screen flex-col bg-gradient-to-b from-[#271547] to-[#521b38] pr-2 py-6 pl-6 gap-2 shadow-lg shadow-neutral-300/20 dark:shadow-gray-900/20">
                        <div className="flex flex-row pb-4 w-full gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6 text-white scale-150">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                            </svg>

                            <h1 className="text-2xl text-white font-bold flex">Intern<h2
                                className="text-secondary-500">.</h2>ship
                            </h1>
                        </div>
                        <div
                            className="flex flex-col w-full  items-start justify-start divide-y divide-white divide-opacity-25">
                            <button
                                className="sidebar-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                </svg>

                                <h6 className="text-sm font-semibold flex-1 text-start ">Home</h6>
                                <div className="focus:bg-white self-end w-2 h-1/2"/>
                            </button>
                            <button
                                className="sidebar-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                </svg>

                                <h6 className="text-sm font-semibold flex-1 text-start ">Accounts</h6>
                                <div className="focus:bg-white self-end w-2 h-1/2"/>
                            </button>
                            <button
                                className="sidebar-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
                                </svg>
                                <h6 className="text-sm font-semibold flex-1 text-start ">Files</h6>
                                <div className="focus:bg-white self-end w-2 h-1/2"/>
                            </button>
                            <button
                                className="sidebar-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                                </svg>

                                <h6 className="text-sm font-semibold flex-1 text-start ">Charts</h6>
                                <div className="focus:bg-white self-end w-2 h-1/2"/>
                            </button>
                        </div>
                        <button
                            className="mt-auto flex flex-row w-11/12 py-2 items-center p-1 gap-4 items-start justify-start text-white text-opacity-30 border-opacity-30 focus:text-opacity-100 focus:border-opacity-100 border-2 border-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                            </svg>
                            <h6 className="text-sm font-semibold flex-1 text-start ">Settings</h6>
                            <div className="focus:bg-white self-end w-2 h-1/2"/>
                        </button>
                    </div>
                    <div
                        className="hidden md:block w-0 h-auto m-0 ml-64 bg-transparent flex-1 shadow-lg shadow-neutral-300/20 dark:shadow-gray-900/20"/>
                </div>
            )}

            <div
                className="sticky w-full bg-white dark:bg-gray-800 h-16 shadow-lg shadow-neutral-300/20 dark:shadow-gray-900/20 flex justify-between items-center px-4 py-4 md:px-10 overflow-hidden">
                <div className="flex gap-2 items-center">
                    <button onClick={changeVisible} className="p-4">
                    </button>
                    <h1 className="text-gray-800 dark:text-white text-xl pb-1 font-semibold">Add Student</h1>
                </div>
                <div className="flex gap-5 items-center">
                    <NotificationButton/>
                    <MessagesButton/>
                    <Avatar firstname="Yassine" lastname="Mouddene"/>
                </div>
            </div>


        </div>
    );
};

export default Contentcontainer;