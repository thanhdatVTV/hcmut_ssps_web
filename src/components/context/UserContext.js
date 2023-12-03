import Reat, { useState } from "react";

const UserContext = Reat.createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        token: '',
        account: {}
    });

    // Login updates the user data with a name parameter
    const loginContext = (userData) => {
        setUser(userData)
    };

    // Logout updates the user data to default
    const logoutContext = (userData) => {
        setUser(userData)
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };