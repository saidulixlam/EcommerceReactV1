import React, { useState } from "react";

const AuthContext = React.createContext({
    token:'',
    email:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider = (props) => {
    
    const [token,setToken]=useState(null);
    const [email,setEmail]=useState(null);

    const userIsLoggedIn=!!token;
    const loginHandler=(token,email)=>{
        localStorage.setItem('token',token)
        setToken(token);
        setEmail(email)
    }
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }
console.log(email);
    const conextValue={
        token:token,
        email:email,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    };

    return <AuthContext.Provider value={conextValue}>{props.children}</AuthContext.Provider>
}
 
export default AuthContext;