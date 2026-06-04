import styles from './FormFase.module.css'
function FormFase(){
    return(
        <>
        <form method="POST">
            <input type="hidden" name="lista_exercicios" className={styles.listaExercicios}></input>
            <input type="hidden" name="proxima"></input>
            <input type="hidden" className={styles.idFase} name="idFase"></input>
        </form>
        <div className={styles.botoes}>
            <button className={styles.botao} id="A">my_var</button>
            <button className={styles.botao} id="B">int variavel</button>
            <button className={styles.botao} id="C">Pudim</button>
            <button className={styles.botao} id="D">pão frances</button>
        </div>
        </>
    )
}

export default FormFase;