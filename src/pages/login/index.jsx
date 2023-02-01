import React, {useContext, useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import TimedPopUp from "../../components/UI/timed-pop-up";
import { usePermify } from "@permify/react-role";
import {AuthContext} from "../../contex/AuthContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email,setEmail] = useState('')
    const [passWord,setPassWord] = useState('')
    const [valid,setvalid] = useState(true)
    const [showPopUp, setShowPopUp] = useState(false);
    const {setJwt} = useContext(AuthContext);
    const {setUser} = useContext(AuthContext);
    let navigate = useNavigate();

    const sendLoginRequest = (e) =>{
        e.preventDefault()
        let session_url = 'http://localhost:8080/api/v1/auth/authenticate';

        axios.post(session_url, {
                "email":email,
                "password":passWord
            }
        ).then(function(response) {
            setJwt(response.data?.token);
            setUser({
                id: response.data?.id,
                nom: response.data?.nom,
                prenom: response.data?.prenom,
                role: response.data?.role
            })
            navigate("/Admin")
        }).catch(function(error) {
          setShowPopUp(true)
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [showPopUp]);
    const verifyEmail = (e) => {
        let email = e.currentTarget.value;
        if (!(/\S+@\S+\.\S+/.test(email))){
            setvalid(false);
        }
        else {
            setvalid(true);
        }
    };

    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 h-screen w-screen flex items-center justify-center overflow-hidden">
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
                            <input type="text" className={valid? "form-field  focus:ring-secondary-500 focus:hover:": "form-field  border-red-500 focus:ring-red-500"} placeholder="exemple@uir.ac.ma"
                                   onInput={event => verifyEmail(event)} value={email} onChange={event => setEmail(event.target.value)}/>
                            <p className={valid? "text-transparent text-xs":"text-red-500 text-xs"}>please type a valid email!</p>
                            <label
                                className="form-header">Password</label>
                            <input type="password" className="form-field" id="password" placeholder="**********" value={passWord} onChange={event => setPassWord(event.target.value)}/>
                            <button disabled={!valid} id="submit" onClick={(e) => sendLoginRequest(e)}  className="mt-7 w-full md:w-auto bg-main-500  hover:bg-main-600 active:bg-main-600 active:scale-95 p-2.5 px-6 rounded-xl font-semibold text-lg text-white shadow-sm disabled:bg-main-500/50">Login</button>
                            <div className="flex flex-row justify-center gap-3 items-center mt-3">
                                <label className="text-sm font-light text-gray-500 ">Don't have an account</label>
                                <Link type={"submit"} to={"/sign-up"} className="text-sm font-light text-main-400"> Sign up!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <TimedPopUp open={showPopUp} color={'red'} message={'Password or email are wrong'} tittle={'Wrong credentials'}/>
        </>


    );
};

export default Login;