import React,{useState} from 'react';

const userContext = React.createContext({
    name: '',
    email: '',
    profilePhoto: '',
    updateUserData: (name,email) => {}
});

export const UserContextProvider = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const updateUserData = (name,email) => {
        console.log('Name: ',name);
        setName(name);
        setEmail(email);
    }

    const userData = {
        name: name,
        email: email,
        profilePhoto: '',
        updateUserData: updateUserData
    }

    return(
        <userContext.Provider value={userData}>{props.children}</userContext.Provider>
    );
}

export default userContext;