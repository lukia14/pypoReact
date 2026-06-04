import styles from './CabecalhoLoja.module.css'
function CabecalhoLoja(){
    return(
        <div className={styles.grupoBotoesSair}>
            <a href="" className={styles.botaoSairCancelar} title="Sair sem salvar">
                <i className="fa-solid fa-xmark"></i> Sair
            </a>
           <button className={styles.botaoSairSalvar} title=" Salvar compras e sair">
                <i className="fa-solid fa-floppy-disk"></i> Salvar
            </button>
        </div>
    )
}

export default CabecalhoLoja;