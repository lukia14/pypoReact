import styles from './Mundo.module.css'
import { Link } from 'react-router-dom';
function EscolhaMundo({titulo,descricao,icone}){
    return(
            <div className={`${styles.cardMundo} ${styles.mundoPortugol}`}>
                <div className={styles.iconeMundo}>
                    <i className={icone}></i>
                </div>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <Link to='/fase' className={styles.botaoEntrar}>Entrar</Link>
            </div>
    )
}

export default EscolhaMundo;