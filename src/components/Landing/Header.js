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
                src="https://mattfarley.ca/img/mf-avatar.svg" alt="profile_img" />
        </div>
    )
}

export default Header
