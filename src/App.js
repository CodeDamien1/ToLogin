
import {getCookie} from "./common"
import { authCheck } from "./utils";


import './App.css';

import Register from './components/register/Register';
import Login from './components/login/Login.js'
import TodoList from './components/Todo/TodoList';
import Toggle from './components/Toggle/Toggle';

import { useState } from 'react';

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

  return (
    <div className="App">
      <div className="toggle-container">
        <button className={!isFlipped ? "active" : ""} onClick={() => setIsFlipped(false)}>Register</button>
        <Toggle onToggle={handleToggle} />
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