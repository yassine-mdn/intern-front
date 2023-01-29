import React, { createContext, useContext, useState } from 'react';
import placeholder from "lodash/fp/placeholder";

const StateContext = createContext({});


export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState("not professeur");
    const [userType, setUserType] = useState("admin");
    const [userId,setUserId] = useState(null);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider value={{ activeMenu,userType,userId, setUserType, setActiveMenu, setUserId}}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
