import React from 'react'

import styles from './ProjectCard.module.css'
import data from '../../Collection/Project'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard(props) {
    return (
        <div>
           <h2 className={styles.projectTypeText}>{ props.title}</h2>
           <div className={styles.projectCardBox}>
                {props.data.map(item =>
                    <div className={styles.projectCard}>
                        <h2 className={styles.projectTitle}>
                            {item.title} 
                        </h2>
                        <img className={styles.projectImg}
                            src={item.imgurl} />
                        <p className={styles.projectDesc}>
                            {item.desc}
                        </p>
                        <div className={styles.projectBadgeCorner}>
                            {item.techstack.map(prd => 
                                <span className={styles.projectBadges}>
                                  {prd} 
                                </span>
                            )}
                        </div>
                        <div className={styles.projectButtonCorner}>
                            <button className={styles.projectButtons}>
                                View More&nbsp;
                                <FontAwesomeIcon icon={faEye} className={styles.projectIcon} />
                            </button>
                            <button className={styles.projectButtons}>Live Site&nbsp;
                            <FontAwesomeIcon icon={faCode} className={ styles.projectIcon} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
