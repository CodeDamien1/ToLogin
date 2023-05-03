
import './App.css';

import Register from './components/register/Register';
import Login from './components/login/Login.js'
import TodoList from './components/Todo/TodoList';
// import Toggle from './components/Toggle/Toggle';

import { useState, useEffect } from 'react';

const App = () => {

  const [user, setUser] = useState()
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div>
      <div className="toggle-container">
        <button className={!isFlipped ? "active" : ""} onClick={() => setIsFlipped(false)}>Register</button>
        <h3>OR </h3>
        <button className={isFlipped ? "active" : ""} onClick={() => setIsFlipped(true)}>Login</button>
      </div>
      {/* <div className="toggle-container">
        <Toggle />
      </div> */}
      <div className="container">
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
          <div className="card">
            <div className="front">
              <Register newUser={setUser} />
            </div>
            <div className="back">
              <Login newUser={setUser} />
            </div>
          </div>
        </div>
        {user 
          ?
          <h1>Hello welcome {user} you have logged in</h1>
          :
          <h1>Please log in</h1>
        }
        <div className="todo-container">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;