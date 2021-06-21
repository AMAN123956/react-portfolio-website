import React from 'react'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarWeek, faCoffee } from '@fortawesome/free-solid-svg-icons'
function App() {
  
  return (
    
    <Router>
      <div className="body-section">
        <Navbar />
        <Switch>
          <Route exact path="/">
             <Landing />
          </Route>
          <Route path="/about">
              <About /> 
          </Route>
          <Route path="/skill">
              <Skill /> 
          </Route>
          <Route path="/project">
              <Project />
          </Route>
        </Switch>
        
        
       
      </div>
     </Router>
     
 
  );
}

export default App;
