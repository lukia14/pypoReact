import styles from './LojaCorpo.module.css'
function LojaCorpo(){
    return(
            <div className={styles.inventarioCabecalho}>
                <span className={styles.txtColuna}>Item</span>
                <span className={styles.txtColuna}>Qtd</span>
            </div> 
    )
}
export default LojaCorpo;