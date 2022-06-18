import React,{useRef} from "react";

import style from './SignUp.module.css';

const SignUp = (props) => {
    const enteredEmailRef = useRef();
    const enteredPasswordRef = useRef();
    const enteredConfirmPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const email = enteredEmailRef.current.value;
        const password = enteredPasswordRef.current.value;
        const confirmPassword = enteredConfirmPasswordRef.current.value; 

        const data={
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCIheej22JapOE7YBVvQYHobUAdZzutWwk',{
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                console.log('User has successfully signed up');
                return res.json();
            }else{
                res.json().then((data)=>{
                    const errorMsg = data.error.message;
                    alert(errorMsg);
                })
            }
        });
    }

    return(
        <section className={style.signUp}>
            <form onSubmit={submitHandler} className={style['signUp-form']}>
                <h1>SignUp</h1>
                <input 
                    className={style['signUp__input']}
                    type='email' 
                    placeholder='Email' 
                    id='email' 
                    required={true}
                    ref={enteredEmailRef}
                />
                <input 
                    className={style['signUp__input']}
                    type='password' 
                    placeholder='Password' 
                    id='password'
                    required={true}
                    ref={enteredPasswordRef}
                /> 
                <input 
                    className={style['signUp__input']}
                    type='password' 
                    placeholder='Confirm Password'
                    id='confirmPassword' 
                    required={true}
                    ref={enteredConfirmPasswordRef}
                /> 
                <button>Sign up</button>
            </form>
        </section>
    );
};

export default SignUp;