import React,{useContext} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import { useSelector} from 'react-redux';
import AuthContext from '../../store/auth-context';
import { authActions } from '../../store/authReducer';


import style from './Navbar.module.css';

const Navbar = (props) => {
    // const authCtx = useContext(AuthContext);
    const isLoggedIn = useSelector(state => console.log(state));
    // const isLoggedIn = authCtx.isLoggedIn;

    // const logoutHandler = () => {
    //     authCtx.logout();
    // }

    return(
        <nav className={style.navbar}>
            <ul className={style.navList}>
                <li className={style.navListItem}>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                {/* {isLoggedIn && <li className={style.navListItem}>
                    <NavLink to='/expenses'>Expenses</NavLink>
                </li>} */}
                <li className={style.navListItem}>
                    {/* {!isLoggedIn && <NavLink to='/signup'>SignUp</NavLink>} */}
                </li>
                <li className={style.navListItem}>
                    {/* {!isLoggedIn && <NavLink to='/login'>Login</NavLink>}
                    {isLoggedIn && <button onClick={logoutHandler}>Logout</button>} */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;