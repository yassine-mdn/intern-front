import React from "react";

const Avatar = (props) => {
    
    const getInitials = () => {
      let initials = (props.firstname).substring(0, 1).toUpperCase();
        initials += (props.lastname).substring(0, 1).toUpperCase();

        return initials;
    }

    return(
        <h1 className=" h-12 w-12 text-center bg-secondary-600 dark:bg-secondary-900 font-semibold text-white font-medium rounded-full text-center p-3">{getInitials()}</h1>
    );

};
export default Avatar;
