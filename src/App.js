
import './App.css';
import Login from './components/login/Login.js'

import { useState, useEffect } from 'react';

const App = () => {

  const [user, setUser] = useState()


  return (
    <div className="login-container">
            {user 
      ?
      <h2>Hello welcome {user} you have logged in</h2>
      :
      <h2>Please log in</h2>

      }
      <Login newUser={setUser}/>

    </div>
  );
}

export default App;
