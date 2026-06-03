import styles from './Mundo.module.css'
function EscolhaMundo({titulo,descricao,icone}){
    return(
            <div className={`${styles.cardMundo} ${styles.mundoPortugol}`}>
                <div className={styles.iconeMundo}>
                    <i className={icone}></i>
                </div>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <a href="/fase/portugol" className={styles.botaoEntrar}>Entrar</a>
            </div>
    )
}

export default EscolhaMundo;