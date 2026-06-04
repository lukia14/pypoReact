import styles from './Fase.module.css'
import DicaFase from '../../components/DicaFase';
import CabecalhoFase from '../../components/CabecalhoFase'
import FormFase from '../../components/FormFase'
function Fase(){
    return(
        <section>
            <input type="hidden" name="listaExercicios" className={styles.listaExercicios} value=''></input>
            <div className={styles.container}>
                <CabecalhoFase/>
                <div className={styles.pergunta}>Qual dessas é uma variável válida?</div>
                <FormFase/>
                <div className={styles.botaoContinuar}></div>
                <DicaFase/>
            </div>
        </section>    
    )
}

export default Fase;