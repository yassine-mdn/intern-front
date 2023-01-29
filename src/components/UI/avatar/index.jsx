import React from "react";

const Avatar = ({firstname,lastname,onClick}) => {
    
    const getInitials = () => {
      let initials = (firstname).substring(0, 1).toUpperCase();
        initials += (lastname).substring(0, 1).toUpperCase();

        return initials;
    }

    return(
        <h1 className=" h-12 w-12 text-center bg-secondary-600 dark:bg-secondary-900 font-semibold text-white font-medium rounded-full text-center p-3" onClick={onClick}>{getInitials()}</h1>
    );

};
export default Avatar;
