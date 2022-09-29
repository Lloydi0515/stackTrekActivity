import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Home from './components/Home';
import Health from './components/Health'
// import HealthBlog from './components/HealthBlog';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  }
  // authenticated ? renderApp() : renderLogin()
  return (

    // router to redirect and check authentication
    <div className="App">
      
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ (<Home />)} ></Route>
            <Route path='/Health' element={ (<Health />) } ></Route>
            <Route  path='/login' element={!isAuthenticated ? (<Login setAuth={setAuth} /> ) : (
              <Navigate to='/dashboard'/>
            ) } ></Route>
            <Route  path='/register' element={!isAuthenticated ? (<Register setAuth={setAuth} /> ) : (
              <Navigate to='/dashboard'/>
            )}></Route>
            <Route  path='/dashboard' element={isAuthenticated ? (<Dashboard setAuth={setAuth}/> ): (
              <Navigate to='/login'/>
            ) }></Route>
          </Routes>
        </div>
      </Router> 
    </div>
  );
}

export default App;
