import estilos from './CabecalhoInicial.module.css'
import { Link } from 'react-router-dom'
function CabecalhoInicial(){
    return(
         <header className={estilos.containerPrincipal}>
        <div className={estilos.containerMenu}>
            <h1 className={estilos.t1}>PYPO</h1>
            <div className={estilos.containerMenu2}>
                <a href="{{url_for('cadastrar')}}"className={`${estilos.menuItem} ${estilos.item1}`}>Login</a>
                <a href="{{url_for('cadastrar')}}"className={`${estilos.menuItem} ${estilos.item1}`}>Cadastrar</a>
                <Link to='/mundo'  className={`${estilos.menuItem} ${estilos.item1}`}>Jogar</Link>
            </div>
        </div>
    </header>
    )
}
export default CabecalhoInicial