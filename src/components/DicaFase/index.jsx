import styles from './DicaFase.module.css'
import mascote from '../../assets/mascote.png'
function DicaFase(){
    return(
        <div className={styles.dica}>
            <img src={mascote} alt="Mascote Pypo"></img>
        </div>
    )
}

export default DicaFase;