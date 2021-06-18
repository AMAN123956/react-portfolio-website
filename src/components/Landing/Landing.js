import styles from './Landing.module.css';
import Header from './Header'
import Skill from './Skill'
import Work from './Work'
import Contact from './Contact'

function Landing() {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <Skill />
            <hr />
            <Work />
            <hr />
            <Contact />
        </div>
    )
}

export default Landing
