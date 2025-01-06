import React from "react";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Want to add a system?</h2>
                <p>Feel free to send a request below!</p>
                <form action="submit">
                    <label htmlFor="request"> System Requested
                        <input type="text" name="request" id="request" />
                    </label>
                </form>
            </div>
        </footer>
    )
}