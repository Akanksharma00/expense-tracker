import React,{useRef} from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
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
                    console.log(data);
                    const token = data.idToken;
                    localStorage('Token',token);
                })
                console.log('User logged in!');
                history.replace('/dummy');
            }else(
                res.json().then((data)=>{
                    const errMessage = data.error.message;
                    alert(errMessage);
                })
            )
        });
    }

    return(
        <section>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type='email'
                    placeholder='Email'
                    id='emailLogin' 
                    ref={enteredEmailRef}
                    required
                />
                <input 
                    type='password'
                    placeholder='Password'
                    id='passwordLogin'
                    ref={enteredPasswordRef}
                    required
                />
                <button>Login</button>
            </form>
        </section>
    );
};

export default Login;