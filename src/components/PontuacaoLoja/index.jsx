import styles from './PontuacaoLoja.module.css'
function PontuacaoLoja(){
    return(
        <div className={styles.saldoUsuario}>
            <i className="fa-solid fa-coins"></i>
            <span className={styles.pontuacao}>100</span>
        </div>
    )
}

export default PontuacaoLoja