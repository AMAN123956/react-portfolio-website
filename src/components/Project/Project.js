import React from 'react'
import styles from './Project.module.css'
import Box from '../UI/Box'
import ProjectCard from '../UI/Project/ProjectCard'
import { frontend, fullstack, react } from '../Collection/Project'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBullseye, faHandSpock } from '@fortawesome/free-solid-svg-icons'

export default function Project() {
    const Title="Project Corner!"
    return (
        <div>
            <Box headingText={Title} />
           
            <div className={styles.projectBox}>
               <div className={styles.filterBox}>
                    <div className={styles.filterPills}>Frontend</div>
                    <div className={styles.filterPills}>Full-Stack</div>
                    <div className={styles.filterPills}>ReactJS</div>
                </div>
                <ProjectCard title={"frontend"} data={frontend }/>
                <ProjectCard title={"backend"}  data={fullstack } />
                <ProjectCard title={"reactjs"} data={react }/>
                
            </div>
        </div>
    )
}
