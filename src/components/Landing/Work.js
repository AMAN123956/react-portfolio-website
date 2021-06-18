import styles from './Work.module.css'
import WorkCard from '../UI/Landing/WorkCard'

function Work() {
    return (
        <div className={styles.workContainer}>
            <h2 className={styles.workTitle}>
                Featured Work
            </h2>
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>
    )
}

export default Work
