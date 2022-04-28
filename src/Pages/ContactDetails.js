import React,{useRef,useContext} from "react";
import AuthContext from "../store/auth-context";
import UserContext from "../store/user-context";

const ContactDetails = (props) => {
    const authCtx = useContext(AuthContext);
    const userCtx = useContext(UserContext);
    
    const nameRef = useRef();
    const photoRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const idToken = authCtx.token;
        const name = nameRef.current.value;
        const photo = photoRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCIheej22JapOE7YBVvQYHobUAdZzutWwk',{
            method: 'POST',
            body: JSON.stringify({
                idToken: idToken,
                displayName: name,
                photoUrl: photo,
                returnSecureToken: true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok){
                res.json().then((data)=>{
                    console.log(data);
                })
            }else{
                res.json().then(data => {
                    console.log(data);
                })
            }
        });        
    }

    return(
        <div>
            <h1>Contact Details</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input 
                        type='text' 
                        placeholder="Full Name"
                        id='name'
                        ref={nameRef}
                    />
                </div>
                <div>
                    <label htmlFor="photo">Profile Photo URL:</label>
                    <input 
                        type='file'
                        placeholder='Enter you profile pic here'
                        id='photo'
                        ref={photoRef}
                    />
                </div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default ContactDetails;