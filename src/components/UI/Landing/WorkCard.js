import styles from './WorkCard.module.css'

export default function WorkCard() {
    return (
        <div className={styles.workCard}>
            {/* Card Left Section */}
            <div className={styles.leftSection}>
                {/*Top Name Section */}
              <div className={styles.leftTopSection}>
                    <h2 className={styles.leftTitle}>
                        JSSCONNECT
                    </h2>
                </div>
                {/*Bottom Info Section */}
                <div className={styles.leftBottomSection}>
                    <button className={styles.liveBtn}>JSS CONNECT</button>
                    <p className={styles.shortInfo}>
                        I was the designer and front-end developer for the initial Pet Plate website in 2015 and worked closely with the company as it grew over a period of 5 years, eventually becoming Lead Front-end Developer. By early 2020, Pet Plate
                        had successfully raised a total investment fund of $13 million dollars.
                    </p>
                </div>
            </div>
            {/* Card Right Section */}
            <div className={styles.rightSection}>
                <img className={styles.rightImg}
                    src="https://ianlunn.co.uk/static/c3b68c2d76a8cfbac4cb7504073c006a/8b5b8/preview-medium.webp" />
            </div>
        </div>
    )
}
