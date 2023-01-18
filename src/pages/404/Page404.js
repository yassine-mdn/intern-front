import React from "react";

const Page404 = () => {
    return (
        <div className="flex items-center justify-center h-screen dark:bg-gray-900">
            <div className="flex flex-col space-y-4 items-center max-w-3xl">
                <h1 className="text-9xl text-gray-200 font-bold px-4 dark:text-secondary-300">404</h1>
                <h1 className="text-5xl text-black font-bold text-center md:text-4xl p-1 dark:text-secondary-500">You have found a secret
                    place.</h1>
                <h1 className="text-2xl text-gray-400 font-thin text-center md:text-1xl p-1">Unfortunately, this is only
                    a 404 page. You may have mistyped the address, or the page has been moved to another URL.</h1>
                <button
                    className="text-2xl text-main-800 font-medium hover:bg-main-200 p-3 px-8 rounded-lg md:text-1xl dark:hover:bg-secondary-800  dark:text-secondary-300">Take
                    me back to the home page
                </button>
            </div>
        </div>
    );
};

export default Page404;