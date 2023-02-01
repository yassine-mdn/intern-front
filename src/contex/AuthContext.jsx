import React, {useState} from "react"

const AuthContext = React.createContext();

function AuthContextProvider({children}) {
    const [jwt, setJwt] = useState('');
    const [user, setUser] = useState('');

    return (
        <AuthContext.Provider value={{jwt, setJwt,user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext}