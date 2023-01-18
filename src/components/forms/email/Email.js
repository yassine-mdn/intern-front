import React, {useState} from "react";

const Email = () => {
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

    return (
        <div>
            <input type="text" className={valid? "themed-field focus:ring-secondary-500 focus:hover:": "themed-field border-red-500 focus:ring-red-500"} placeholder="exemple@uir.ac.ma" onInput={event => verifyEmail(event)}/>
            <p className={valid? "hidden":"text-red-500 text-xs"}>please type a valid email!</p>
        </div>
    );
};

export default Email;