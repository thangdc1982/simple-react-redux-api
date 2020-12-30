import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, login, logout } from './actions';

function App() {  
  
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);  

  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const userChange = (e) => {
    setUser(e.target.value);
  }

  const handleAuth = () => {
    if (isLogged) {
      // Current log-in
      // dispatch log-out
      dispatch(logout());
    } else {
      // Current log-out
      // dispatch log-in
      dispatch(login(user));
    }
  };

  return (
    <div className="container">
      <h1>My App</h1>  
      <h4>Counter {counter}</h4>          
      <button className="btn btn-primary" onClick={() => dispatch(increment(5))}>+</button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
      <h4>Current user is</h4>
      <input type="text" value={user} onChange={userChange} /><br /><br />
      {
      user && <button className="btn btn-primary" onClick={handleAuth}>{isLogged ? "Log Out" : "Log In"}</button>      
      }
    </div>
  );
}

export default App;
