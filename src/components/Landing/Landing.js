import styles from './Landing.module.css';
import Header from './Header'
import Skill from './Skill'
import Work from './Work'
import Blog from './Blog'
import Contact from './Contact'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
function Landing() {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <Skill />
            <hr />
            <Work />
            <Link to="/project" className={styles.moreWorkBtn}>
            <button className="btn btn-primary mx-auto">More Works</button>
            </Link>
            <hr />
            <Blog />
            <hr />
            <Contact />
            <hr />
            <Footer />
           
        </div>
    )
}

export default Landing
