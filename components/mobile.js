import Iphone15Pro from "../components/magicui/iphone-15-pro";
import styles from "../styles/mobile.module.css"
export default function Mobile(){
    return(
        <>
    <div className={styles.main}>
        <div className={styles.header}>Best Trading App</div>
        <div className={styles.iphone}>
      <Iphone15Pro
        className="size-small"
        src="./Balance.png"
      />
      </div>

    </div>
        </>
    )
}