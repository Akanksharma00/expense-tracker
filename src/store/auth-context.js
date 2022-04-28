import React,{useState} from 'react';

const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    
    const isLoggedIn = !!token;

    const login = (token) => {
        localStorage.setItem('token',token);
        setToken(token);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;