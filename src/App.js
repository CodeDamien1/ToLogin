
import {deleteCookie, getCookie} from "./common"
import { authCheck } from "./utils";


import './App.css';

import Register from './components/register/Register';
import Login from './components/login/Login.js'
import TodoList from './components/Todo/TodoList';
import Toggle from './components/Toggle/Toggle';
import MessageBoard from './components/messageboard/MessageBoard';

import banner from './icons/banner.png';
import logo from './icons/TODOLIST.png'

import { useState, useEffect } from 'react';

const App = () => {
  
  const [user, setUser] = useState();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = (isChecked) => {
    setIsFlipped(isChecked);
  };
  

  useEffect(()=>{
    let jwt = getCookie("jwt_token")
    console.log("!!!!!!!!!!")
    console.log(jwt);

    if (jwt !== false){
      loginWithToken(jwt);
    }
  }, []);

  const loginWithToken = async (jwt) => {
    const user = await authCheck(jwt)
    setUser(user);
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    setUser(null);
    deleteCookie("jwt_token");
  }

  return (
    <div className="App">
      {user ? (
        <div>
          <div class="banner-container">
          <img src={banner} className="banner-image" alt="banner"></img>
          </div>
          <div className="welcome-container">
            <h1 className="welcome-message">Welcome back, {user}! Here are your tasks for today.</h1>
            <button className="logout" onClick={handleLogOut}>Log Out</button>
          </div>
          <div className="todo-container">
            <TodoList />
          </div>
          <MessageBoard />
        </div>
      ) : (
        <div>
          <div className="toggle-container">
            <button className={!isFlipped ? "active" : ""} onClick={() => setIsFlipped(false)}>Register</button>
            <Toggle onToggle={handleToggle} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
            <button className={isFlipped ? "active" : ""} onClick={() => setIsFlipped(true)}>Login</button>
          </div>
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
            </div>
            <h1 className="signin-message">Please sign in to access your to-do list.</h1>
          <div class="logo-container">
          <img src={logo} className="logo-image" alt="logo"></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;