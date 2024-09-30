import styles from "../styles/hero.module.css";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.header}>
                <h1>Empower Your Trades<br/> with CMAAN </h1>
            </div>
            <button className={styles.btn}>Get Started</button>
        </div>
    );
}
