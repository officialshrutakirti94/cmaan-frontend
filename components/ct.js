import styles from '../styles/ct.module.css'
export default function Ct(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h3>What are we building?</h3>
                    
                </div>
               <div className={styles.cardWrapper}>
                <div className={styles.cards}>
                    <h2>Crypto Trading</h2>
                    <img src='https://static.vecteezy.com/system/resources/previews/009/394/422/original/3d-illustration-bitcoin-cryptocurrency-png.png' height={200} width={200}></img>
                </div>
                <div className={styles.cards}>
                    <h2>Forex Trading</h2>
                    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/three-inside-up-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bitcoin-logo-analytics-candlestick-chart-graph-stock-market-pattern-pack-business-icons-6723298.png' height={200} width={200}></img>
                    </div>
                    <div className={styles.cards}>
                    <h2>Networking</h2>
                    <img src='https://static.vecteezy.com/system/resources/previews/028/035/337/original/business-networking-3d-illustration-png.png' height={200} width={200}></img>
                </div>

               </div>

            </div>
        </>
    )
}