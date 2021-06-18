import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Nav defaultActiveKey="/" as="ul" className={styles.navbar} >
                <Nav.Item as="li">
                    <Link to="/" className={styles.navText}>Home</Link>
                </Nav.Item>
                <div style={{ display: "flex" }}>
                    <Nav.Item as="li">
                        <Link to="/about" className={styles.navText}>About</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/skill" className={styles.navText}>Skills</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/project" className={styles.navText}>Project</Link>
                    </Nav.Item>

                </div>
            </Nav>
        </div>
    )
}
