import React from 'react';

const userContext = React.createContext({
    name: '',
    email: '',
    profilePhoto: '',
});

export const userContextProvider = (props) => {
    const userData = {
        name: '',
        email: '',
        profilePhoto: ''
    }

    return(
        <userContext.Provider value={userData}>{props.children}</userContext.Provider>
    );
}

export default userContext;