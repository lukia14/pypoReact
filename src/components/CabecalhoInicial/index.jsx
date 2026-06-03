import estilos from './CabecalhoInicial.module.css'

function CabecalhoInicial(){
    return(
         <header className={estilos.containerPrincipal}>
        <div className={estilos.containerMenu}>
            <h1 className={estilos.t1}>PYPO</h1>
            <div className={estilos.containerMenu2}>
                <a href="{{url_for('login')}}" className={`${estilos.menuItem} ${estilos.item1}`}>Logar</a>
                <a href="{{url_for('cadastrar')}}"className={`${estilos.menuItem} ${estilos.item1}`}>Cadastrar</a>
                <a href="{{url_for('principal')}}"className={`${estilos.menuItem} ${estilos.item1}`}>Game</a>
            </div>
        </div>
    </header>
    )
}
export default CabecalhoInicial