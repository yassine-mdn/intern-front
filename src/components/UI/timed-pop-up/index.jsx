import React from "react";
import ReactDOM from "react-dom";

const TimedPopUp = ({open = true,tittle = 'title',message = 'message',color }) => {

    if (!open) return null

    const red = "w-full px-4 mx-4 sm:w-96 h-20 grid drop-shadow-md bg-red-100 dark:bg-red-400 rounded-xl py-5 px-6 mb-4 text-base text-red-700 dark:text-red-800 mb-3"
    const green ="w-full px-4 mx-4  sm:w-96 h-20 grid drop-shadow-md bg-green-100 dark:bg-green-400 rounded-xl py-5 px-6 mb-4 text-base text-green-700 dark:text-green-800  mb-3"
    const main ="w-full px-4 mx-4 sm:w-96 h-20 grid drop-shadow-md bg-main-100 dark:bg-main-400 rounded-xl py-5 px-6 mb-4 text-base text-main-700 dark:text-main-800 mb-3"
    const secondary ="w-full px-4 mx-4 sm:w-96 grid h-20 drop-shadow-md bg-secondary-100 dark:bg-secondary-400 rounded-xl py-5 px-6 mb-4 text-base text-secondary-700 dark:text-secondary-800 mb-3"
    const yellow ="w-full px-4 mx-4 sm:w-96 grid h-20 drop-shadow-md bg-yellow-100 dark:bg-yellow-400 rounded-xl py-5 px-6 mb-4 text-base text-yellow-700 dark:text-yellow-800 mb-3"

    return ReactDOM.createPortal(
        <div className="fixed z-100 bottom-20 w-full flex justify-center items-end">
            <div class={color === "red"?red:color === "green"?green
                :color ==="main"? main : color === "yellow" ? yellow:secondary } role="alert">
                <strong class="font-bold">{tittle}</strong>
                <span class="block sm:inline">{message}</span>
            </div>
        </div>

        ,document.getElementById('portal')
    )
};

export default TimedPopUp;