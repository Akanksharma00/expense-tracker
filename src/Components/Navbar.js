import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div>
            <ul>
                <li>
                    <NavLink to='/signup'>SignUp</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/dummy'>Dummy</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;