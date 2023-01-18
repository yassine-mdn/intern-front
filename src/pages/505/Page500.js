import React from "react";

const Page500 = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-main-800">
            <div className="flex flex-col space-y-4 items-center max-w-3xl">
                <h1 className="text-9xl text-white opacity-50 font-bold px-4 ">500</h1>
                <h1 className="text-5xl text-white font-bold text-center md:text-4xl p-1">Something bad just happened...
                </h1>
                <h1 className="text-2xl text-white opacity-70 font-thin text-center md:text-1xl p-1">Our servers could
                    not
                    handle your request. Don't worry, our development team was already notified. Try refreshing the
                    page.</h1>
                <button
                    className="text-2xl text-main-800 bg-white font-medium hover:bg-main-200 p-3 px-8 rounded-lg md:text-1xl active:scale-105">Refresh
                    the page
                </button>
            </div>
        </div>
    );
};

export default Page500;