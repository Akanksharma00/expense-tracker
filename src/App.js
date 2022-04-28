import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import SignUp from './Components/auth/SignUp';
import Login from './Components/auth/login';
import Dummy from './Components/dummy';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <body>
      <Navbar />
      <h1>Expense Tracker</h1>
      <Route path='/signup'><SignUp /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/dummy'><Dummy /></Route>
    </body>
  );
}

export default App;
