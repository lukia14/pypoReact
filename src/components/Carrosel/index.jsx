import estilos from "./Carrosel.module.css"
import fundo1 from '../../assets/fundo1.jpg'
import fundo2 from '../../assets/fundo2.jpg'
import mascote from '../../assets/mascote.png'
function Carrosel (){
    return(
    <main>
        <div className={estilos.slogan}>
            <p></p>
        </div>
        <div className={estilos.slideshow}>
        <div className={estilos.slide} style={{ backgroundImage: `url(${fundo1})` }}></div>
        <div className={estilos.slide} style={{ backgroundImage: `url(${fundo2})` }}></div>
        <div className={estilos.slide} style={{ backgroundImage: `url(${mascote})` }}></div>
        </div>
    </main>
    )
}
export default Carrosel