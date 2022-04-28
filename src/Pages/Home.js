import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import ContactDetails from '../Pages/ContactDetails';

const Home = (props) => {
    const history = useHistory();

    const completeProfileHandler = () => {
        history.replace('/contactDetails');
    }

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
    </section>);
};

export default Home;