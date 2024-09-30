import { useState } from 'react';
import styles from '../styles/nav.module.css';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggle clicked');
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.leftElement}>
                    <h1>Cmaan-tech</h1>
                    <p>CT Bots</p>
                    <p>Career</p>
                    <p>Features</p>
                </div>

                <div className={styles.rightElement}>
                    <a href="/login" className={styles.navLink}>Login</a>
                    <a href="/register" className={styles.navLink}>Register</a>
                </div>

                <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                    <div className={styles.hamburgerIcon}></div>
                    <div className={styles.hamburgerIcon}></div>
                    <div className={styles.hamburgerIcon}></div>
                </div>
            </div>
            

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="/login" className={styles.navLink} onClick={toggleMenu}>Login</a>
                    <a href="/register" className={styles.navLink} onClick={toggleMenu}>Register</a>
                    <p onClick={toggleMenu}>CT Bots</p>
                    <p onClick={toggleMenu}>Career</p>
                    <p onClick={toggleMenu}>Features</p>
                </div>
            )}
        </>
    );
}
