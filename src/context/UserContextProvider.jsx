import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({children}) => {
    const [user, setuser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setuser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider