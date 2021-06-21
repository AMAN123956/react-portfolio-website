import styles from './Landing.module.css';
import Header from './Header'
import Skill from './Skill'
import Work from './Work'
import Blog from './Blog'
import Contact from './Contact'
import Footer from '../Footer/Footer'
function Landing() {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <Skill />
            <hr />
            <Work />
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
