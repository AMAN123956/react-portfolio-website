import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarWeek, faCoffee } from '@fortawesome/free-solid-svg-icons'
function App() {
  
  return (
    
    <Router>
      <div className="body-section">
        <Navbar />
        <Switch>
          <Route exact path="/">
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
