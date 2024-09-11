import React from "react";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div class="tabs">
            <nav class="tab-nav">
            <ul class="tab-list" id="tab-list">
                <li><button>DnD5e</button></li>
                <li><button>MotW</button></li>
                <li><button>Persona</button></li>
            </ul>
            </nav>
        </div>
    )
}