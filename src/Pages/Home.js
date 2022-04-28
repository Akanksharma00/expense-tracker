import React from 'react';
import ContactDetails from './ContactDetails';

const Home = (props) => {
    return(
    <section>
        <h2>Welcome to Expense Tracker!!!</h2>
        <p>Your profile is incomplete
            <span>
                <button>Complete Profile</button>
            </span>
        </p>
        <ContactDetails />
    </section>);
};

export default Home;