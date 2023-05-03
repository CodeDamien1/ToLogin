
import './App.css';

import Register from './components/register/Register';
import Login from './components/login/Login.js'
import TodoList from './components/Todo/TodoList';

import { useState, useEffect } from 'react';

const App = () => {

  const [user, setUser] = useState()

  return (
    <div className="container">
            {user 
      ?
      <h2>Hello welcome {user} you have logged in</h2>
      :
      <h2>Please log in</h2>

      }

      <Register newUser={setUser}/>
      <Login newUser={setUser}/>
      <TodoList />
      </div>
  );
}

export default App;

