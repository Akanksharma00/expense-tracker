import React,{useContext} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
// import AuthContext from '../../store/auth-context';
import { authActions } from '../../store/authReducer';
import { themeActions } from '../../store/themeReducer';

import style from './Navbar.module.css';

const Navbar = (props) => {
    // const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const darkTheme = useSelector(state => state.theme.darkTheme);
    const activateTheme = useSelector(state => state.theme.activateTheme);
    const activatePremium = useSelector(state => state.expenses.activatePremium);
    // const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        // authCtx.logout();
        dispatch(authActions.logout());
    }

    const toggleThemeHandler = () => {
        dispatch(themeActions.toggleTheme());
    }

    return(
        <nav className={style.navbar}>
            <ul className={style.navList}>
                <li className={style.navListItem}>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                {isLoggedIn && <li className={style.navListItem}>
                    <NavLink to='/expenses'>Expenses</NavLink>
                </li>}
                <li className={style.navListItem}>
                    {!isLoggedIn && <NavLink to='/signup'>SignUp</NavLink>}
                </li>
                <li className={style.navListItem}>
                    {!isLoggedIn && <NavLink to='/login'>Login</NavLink>}
                    {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                </li>
                
                { activateTheme && <button onClick={toggleThemeHandler}>{darkTheme ? 'Light' : 'Dark'}</button>}
            </ul>
            
        </nav>
    );
};

export default Navbar;