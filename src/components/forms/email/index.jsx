import React, {useState} from "react";

const   Email = ({value,handleChange}) => {
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
            <input type="text" className={valid? "form-field  focus:ring-secondary-500 focus:hover:": "form-field  border-red-500 focus:ring-red-500"} placeholder="exemple@uir.ac.ma" value={value} onChange={handleChange} onInput={event => verifyEmail(event)}/>
            <p className={valid? "text-transparent text-xs":"text-red-500 text-xs"}>please type a valid email!</p>
        </div>
    );
};

export default Email;