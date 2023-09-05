import React, { useState } from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider = (props) => {
    
    const [token,setToken]=useState(null);

    const userIsLoggedIn=!!token;
    const loginHandler=(token)=>{
        localStorage.setItem('token',token)
        setToken(token);
    }
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }

    const conextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    };

    return <AuthContext.Provider value={conextValue}>{props.children}</AuthContext.Provider>
}
 
export default AuthContext;