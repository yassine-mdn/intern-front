import React from "react";
import Email from "../../components/forms/email/Email";


const Signup = () => {

    return (
        <div className="flex bg-neutral-100 items-center justify-center h-screen dark:bg-gray-900">
            <form className=" w-11/12 sm:w-[480px]">
                <div className="mb-12 flex flex-col items-center">
                    <svg viewBox=".15 .13 799.7 479.69" xmlns="http://www.w3.org/2000/svg" className="w-16 md:w-32 lg:w-48 scale-[0.4] fill-main-500">
                        <path
                            d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"/>
                    </svg>
                    <h1 className="text-4xl dark:text-white text-black font-bold">Sign Up</h1>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First
                            name</label>
                        <input type="text" className="themed-field" id="first_name" placeholder="Yassine"/>
                    </div>
                    <div>
                        <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last
                            name</label>
                        <input type="text" className="themed-field" id="last_name" placeholder="Mouddene"/>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">email</label>
                    <Email id="email"/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" className="themed-field" id="password" placeholder="**********"/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Confirm
                        password</label>
                    <input type="password" className="themed-field" placeholder="**********"/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Filiére</label>
                    <input type="text" className="themed-field" id="last_name" placeholder="placeholder"/>
                </div>
                <div className="mt-4 flex justify-center">
                    <button type={"submit"}
                            className=" p-2.5 text-white rounded-lg bg-main-500 w-full md:w-64 hover:bg-main-800 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;