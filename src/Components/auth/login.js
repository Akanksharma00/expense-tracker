import React,{useRef, useContext} from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import style from './Login.module.css';

const Login = (props) => {
    const authCtx = useContext(AuthContext);
    const history = useHistory();
    const enteredEmailRef = useRef();
    const enteredPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const email = enteredEmailRef.current.value;
        const password = enteredPasswordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCIheej22JapOE7YBVvQYHobUAdZzutWwk',{
            method: 'POST',
            body: JSON.stringify({
                email:email,
                password: password,
                returnSecureToken: true 
            })
        }).then(res => {
            if(res.ok){
                res.json().then((data)=>{
                    history.replace('/home');
                    console.log(data);
                    const token = data.idToken;
                    authCtx.login(token);
                })
                console.log('User logged in!');
            }else(
                res.json().then((data)=>{
                    const errMessage = data.error.message;
                    alert(errMessage);
                })
            )
        });
    }


    return(
        <section className={style.loginSection}>
            <form onSubmit={submitHandler} className={style['loginSection-form']}>
                <h1>Login</h1>
                <input 
                    className={style['loginSection-form__input']}
                    type='email'
                    placeholder='Email'
                    id='emailLogin' 
                    ref={enteredEmailRef}
                    required
                />
                <input 
                    className={style['loginSection-form__input']}
                    type='password'
                    placeholder='Password'
                    id='passwordLogin'
                    ref={enteredPasswordRef}
                    required
                />
                <button>Login</button>
                <div>
                    <a href='#'>Forgot Password</a>
                </div>
            </form>
            <button>Don't have an account? Sign up</button>
        </section>
    );
};

export default Login;