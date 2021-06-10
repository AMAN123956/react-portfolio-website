import './App.css';
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarWeek, faCoffee } from '@fortawesome/free-solid-svg-icons'
function App() {
  
  return (
    <div className="body-section">
     
      <About />
      <Skill />
     <Project />
    </div>
  );
}

export default App;
