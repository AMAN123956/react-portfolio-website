import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.aboutHeading}>
                Full-Stack Web Developer & Programmer
            </h2>
            <h4 className={styles.subHeading}>
                Hi! I'm Aman , a Full-Stack Web Developer with 15+ Months experience of creating various Projects and working for multiple organizations.
            </h4>
            <img className={styles.profileImg}
                src="https://cdn1.vectorstock.com/i/thumb-large/80/25/programmer-flat-color-icon-vector-38028025.jpg" alt="profile_img" />
        </div>
    )
}

export default Header
