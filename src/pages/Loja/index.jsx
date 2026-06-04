import styles from './Loja.module.css'
import CabecalhoLoja from '../../components/CabecalhoLoja/index'
import LojaCorpo from '../../components/LojaCorpo/index'
import PontuacaoLoja from '../../components/PontuacaoLoja/index'
import ItemLoja from '../../components/ItemLoja/index'
import FinalLoja from '../../components/FinalLoja/index'
function Loja(){
    return(
        <div className={styles.telaLojaContainer}>
            <div className={styles.lojaHeaderActions}>
                <CabecalhoLoja/>
                <PontuacaoLoja/>
            </div>
            <h1 className={styles.tituloLoja}>Loja Pypo</h1>
            <p className={styles.subtituloLoja}>Passe o mouse sobre os itens para ver os detalhes!</p>
            <div className={styles.layoutLojaCorpo}>
                <aside className={styles.secaoInventario}>
                    <h2><i className="fa-solid fa-box-open"></i> Meu Inventário</h2>
                    <LojaCorpo/>
                    <ItemLoja/>
                </aside>
                <div className={styles.gridLoja}>
                    <input type="hidden" id="item-id"></input>
                    <FinalLoja/>
                </div>
            </div>
            <div className={styles.flashContainer}></div>
        </div>
    )
}

export default Loja;