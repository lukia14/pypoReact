import styles from './ItemLoja.module.css'
function ItemLoja(){
    return(
        <div className={styles.inventarioDados}>
            <div className={styles.itemInventario}>
                <span className={styles.nomeItemInventario}>nome</span>
                <span className={styles.qtdItemInventario}>qtd</span>
            </div>
        </div>
    )
}

export default ItemLoja;