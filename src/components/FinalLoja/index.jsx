import styles from './FinalLoja.module.css'
function FinalLoja(){
    return(
        <div className={styles.cardItem}>
            <div className={styles.areaInterativa}>
                <div className={styles.iconeItem}>
                    <i className="fa-solid fa-glasses"></i>
                </div>
                <div className={styles.descricaoItem}>
                    <p>100</p>
                </div>
            </div>
            <h3 className={styles.nomeItem}>nome</h3>
            <div className={styles.precoItem}>
                <i className="fa-solid fa-coins"></i>
                <span>100</span>
            </div>
            <button className={styles.botaoComprar}>Comprar</button>
        </div>
    )
}

export default FinalLoja;