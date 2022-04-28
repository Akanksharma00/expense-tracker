import React,{useRef} from "react";

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

        console.log(data);

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
        <section>
            <h1>SignUp</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type='email' 
                    placeholder='Email' 
                    id='email' 
                    required={true}
                    ref={enteredEmailRef}
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    id='password'
                    required={true}
                    ref={enteredPasswordRef}
                /> 
                <input 
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