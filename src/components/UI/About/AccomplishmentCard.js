import React from 'react'
import styles from './AccomplishmentCard.module.css'
import data from '../../Collection/Accomplishment'
function AccomplishmentCard() {
    return (
        <div style={{display:"flex"}}>
            {data.map(item =>
                <div className={styles.accomplishmentcard}>
                    <img className={styles.certificateImg} src={item} style={{ borderRadius: "0px",  margin: "10px" }} />
            </div>)}
         </div>
    )
}

export default AccomplishmentCard
