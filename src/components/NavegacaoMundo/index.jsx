import styles from './Navegacao.module.css'
import { Link } from 'react-router-dom';
function NavegacaoMundo({icone}){
    return(
    <div className={styles.menuDashboard}>
        <Link to='/loja' className={styles.itemMenu} title="Loja">
            <i className="fa-solid fa-store"></i>
            <span>Loja</span>
        </Link>
        <a href="/conquistas" className={styles.itemMenu} title="Conquistas">
            <i class="fa-solid fa-trophy"></i>
            <span>Conquistas</span>
        </a>
        <a href="/configuracoes" className={styles.itemMenu} title="Configurações">
            <i class="fa-solid fa-gear"></i>
            <span>Configurações</span>
        </a>
    </div>
    )
}

export default NavegacaoMundo;