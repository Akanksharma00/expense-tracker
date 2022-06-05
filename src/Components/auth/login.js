import React,{useRef, useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
// import AuthContext from '../../store/auth-context';
import {useDispatch, useSelector} from 'react-redux';

import style from './Login.module.css';
import { authActions } from '../../store/authReducer';

const Login = (props) => {
    const [forgetPassword, setForgetPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    // const authCtx = useContext(AuthContext);

    const history = useHistory();

    const enteredEmailRef = useRef();
    const enteredPasswordRef = useRef();
    const forgetPasswordEmailRef = useRef();

    //Login Handler
    const loginSubmitHandler = (event) => {
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
                    console.log("login data: ",data);
                    const token = data.idToken;
                    localStorage.setItem('token', token);
                    // authCtx.login(token);
                    dispatch(authActions.login(token));
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

    const forgetPasswordHandler = () => {
        setForgetPassword(true);
    }

    const signUpHandler = () => {
        history.replace('/signup');
    }

    const forgetPasswordSubmitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        const forgetEmail = forgetPasswordEmailRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCIheej22JapOE7YBVvQYHobUAdZzutWwk',{
            method: 'POST',
            body: JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email: forgetEmail
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=> {
            setLoading(false);
            if(res.ok){
                console.log(res);
                history.replace('/signup');
            }else{
                res.json().then((data)=>{
                    const errMessage= data.error.message;
                    alert(errMessage);
                })
            }
        })
    }

    return(
        <section className={style.loginSection}>
            {!forgetPassword && <div>
            <form onSubmit={loginSubmitHandler} className={style['loginSection-form']}>
                <h1>Login</h1>
                <div>
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
                    <div>
                        <a href='#' onClick={forgetPasswordHandler}>Forgot Password</a>
                    </div>
                    <button>Login</button>
                </div>
                </form>

                <div>
                    <p>Don't have an account? 
                        <span><a href='#' onClick={signUpHandler}>Sign up</a></span>
                    </p>
                </div>

                </div>}
                
                {loading && <p>Loading...</p>}

                {forgetPassword && !loading && <form onSubmit={forgetPasswordSubmitHandler}>
                    <p>Enter the email with which you have registered</p>
                    <input 
                        className={style['loginSection-form__input']}
                        type='email'
                        placeholder='Email'
                        ref={forgetPasswordEmailRef}
                    />
                    <button>Send Link</button>
                    <div>
                        <p>Already a user?
                            <span>
                                <a href='/login'>Login</a>
                            </span>
                        </p>
                    </div>
                </form>}
         
        </section>
    );
};

export default Login;