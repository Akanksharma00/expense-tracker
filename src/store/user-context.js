import React,{useState} from 'react';

const userContext = React.createContext({
    name: '',
    email: '',
    profilePhoto: '',
    updateUserData: (name) => {}
});

export const UserContextProvider = (props) => {
    const [name, setName] = useState('');

    const updateUserData = (name) => {
        setName(name);
    }

    const userData = {
        name: name,
        email: '',
        profilePhoto: '',
        updateUserDate: updateUserData
    }

    return(
        <userContext.Provider value={userData}>{props.children}</userContext.Provider>
    );
}

export default userContext;