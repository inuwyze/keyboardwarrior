import LoginPage from './views/LoginPage';
import NavBar from "./components/NavBar"
import HomePage from "./views/HomePage"
import './App.css';

import { useState } from 'react';
import {Routes,Route} from 'react-router'
import Game from './views/Game';
function App() {
  let [loggedin,setLogin]=useState(false)
  if(loggedin)
   return(
    <div>
    <NavBar></NavBar>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='Game' element={<Game/>}/>
    
    
    </Routes>
  
  
    </div>
    )
  else
  return (
    <div className="App">
      <LoginPage login={setLogin}/>
    </div>
  );
}

export default App;
