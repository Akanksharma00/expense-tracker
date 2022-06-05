import React,{useEffect, useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '../store/userReducer';

// import AuthContext from '../store/auth-context';
// import UserContext from "../store/user-context";

const Home = (props) => {
    const history = useHistory();
    // const authCtx = useContext(AuthContext);
    // const userCtx = useContext(UserContext);

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const name = useSelector(state => state.user.name);
    const email = useSelector(state => state.user.email);

    const completeProfileHandler = () => {
        history.replace('/contactDetails');
    }

    useEffect(()=>{
        // const token = authCtx.token;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCIheej22JapOE7YBVvQYHobUAdZzutWwk',{
            method:'POST',
            body: JSON.stringify({
                idToken: token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                res.json().then((data)=>{
                    console.log(data.users[0]);
                    // userCtx.updateUserData(data.users[0].displayName,data.users[0].email);
                    dispatch(userActions.updateUserData({name: data.users[0].displayName, email: data.users[0].email}));
                })
            }else{
                res.json().then((data)=>{
                    console.log(data);
                })
            }
        });
    },[]);

    return(
    <section>
        <h2>Welcome to Expense Tracker!!!</h2>
        <p>Your profile is incomplete
            <span>
                <a href='#' onClick={completeProfileHandler}>
                    Complete Profile
                </a>
            </span>
        </p>

        {/* <img src={userCtx.profilePhoto} alt='Profile Pic'/> */}
        <p><span>Name: </span>{name}</p>
        <p><span>Email: </span>{email}</p>
        
    </section>);
};

export default Home;