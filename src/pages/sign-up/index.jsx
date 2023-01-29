import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";


const Signup = () => {
    const [email,setEmail] = useState('')
    const [passWord,setPassWord] = useState('')
    const [confPassWord,setConfPassWord] = useState('')

    const [valid,setvalid] = useState(true)
    const verifyEmail = (e) => {
        let email = e.currentTarget.value;
        if (!(/\S+@\S+\.\S+/.test(email))){
            setvalid(false);
        }
        else {
            setvalid(true);
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault()

    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="relative w-full max-w-lg">
                <div
                    className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600/80 rounded-full mix-blend-multiply dark:mix-blend-lighten  filter blur-xl opacity-70 dark:opacity-95 animate-blob"></div>
                <div
                    className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-600/80  rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 dark:opacity-95 animate-blob animation-delay-2000"></div>
                <div
                    className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600/80  rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 dark:opacity-95 animate-blob animation-delay-4000"></div>
                <div className="m-8 relative space-y-4">
                    <form className="p-5 bg-white/95 dark:bg-gray-800/95 rounded-lg flex flex-col drop-shadow-md  shadow-neutral-300/20 dark:shadow-gray-900/20 ">
                        <label
                            className="form-header">email</label>
                        <input type="text" className={valid? "form-field  focus:ring-secondary-500 focus:hover:": "form-field  border-red-500 focus:ring-red-500"} placeholder="exemple@uir.ac.ma" onInput={event => verifyEmail(event)}/>
                        <p className={valid? "text-transparent text-xs":"text-red-500 text-xs"}>please type a valid email!</p>
                        <label
                            className="form-header">Password</label>
                        <input type="password" className="form-field" id="password" placeholder="**********"/>
                        <label
                            className="form-header">Confirm Password</label>
                        <input type="password" className="form-field" id="password" placeholder="**********"/>
                        <button  className="mt-7 w-full md:w-auto bg-main-500  hover:bg-main-600 active:bg-main-600 p-2.5 px-6 rounded-xl font-semibold text-lg text-white shadow-sm">Sign up</button>
                        <div className="flex flex-row justify-center gap-3 items-center mt-3">
                            <label className="text-sm font-light text-gray-500 ">Already have an account</label>
                            <Link type={"submit"} to={"/login"} className="text-sm font-light text-main-400"> Login!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;