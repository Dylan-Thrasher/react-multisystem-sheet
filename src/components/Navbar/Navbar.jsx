import React from "react";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.tabs}>
            <nav className={styles.tabNav}>
                <ul className={styles.tabList} id="tab-list">
                <li><button className="DnD5eBtn">DnD5e</button></li>
                <li><button className="motwBtn">MotW</button></li>
                <li><button className={styles.personaBtn}>Persona</button></li>
                <li><button className="magicAcademyBtn">Magic Academy</button></li>
            </ul>
            </nav>
        </div>
    )
}