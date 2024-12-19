import React from "react";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.tabs}>
            <nav className={styles.tabNav}>
                <ul className={styles.tabList} id="tab-list">
                <li><button>DnD5e</button></li>
                <li><button>MotW</button></li>
                <li><button>Persona</button></li>
                <li><button>Magic Academy</button></li>
            </ul>
            </nav>
        </div>
    )
}