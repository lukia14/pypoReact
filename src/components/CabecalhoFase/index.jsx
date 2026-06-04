import styles from './CabecalhoFase.module.css'
import mascote from '../../assets/mascote.png'
function CabecalhoFase(){
    return(
        <div className={styles.containerHeader}>
            <div className={styles.titulo}><img src={mascote} alt="imagem cubo" className={styles.cubo}></img>
            Variáveis
            </div>
            <div id="sequencia" className={styles.titulo}><i className="fa-solid fa-square-check fa-beat" className={styles.icone}></i>sequência: 0</div>
            <div className={styles.pontuacao}className={styles.titulo}>Pontos: 100</div>
        </div>
    )
}

export default CabecalhoFase;