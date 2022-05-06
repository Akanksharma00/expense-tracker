import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './App.css';

import Home from './Pages/Home';
import SignUp from './Components/auth/SignUp';
import Login from './Components/auth/Login';
import Navbar from './Components/Layout/Navbar';
import AuthContext from './store/auth-context';
import ContactDetails from './Pages/ContactDetails';
import Expenses from './Pages/Expenses';

const App = () => {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <body>
      <h1>Expense Tracker</h1>
      <Navbar />
      <Route path='/home'>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Redirect to='/login'/>}
      </Route>
      <Route path='/expenses'>
        {isLoggedIn && <Expenses />}
        {!isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/contactDetails'><ContactDetails /></Route>
      <Route path='/signup'><SignUp /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='*'><Redirect to='/login'/></Route>
    </body>
  );
}

export default App;
