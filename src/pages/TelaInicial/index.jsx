import CabecalhoInicial from '../../components/cabecalhoInicial'
import Carrosel from '../../components/Carrosel'
import ItemInicial from '../../components/ItemInicial'
import estilos from './TelaInicial.module.css'
function TelaInicial(){
    const listaItem = [{
        titulo : 'Gamificação',
        descricao : 'Aprenda de forma divertida com desafios interativos e recompensas.'
    },
    {
        titulo : 'Portugol',
        descricao : 'Domine lógica de programação com uma linguagem simples e educativa.'
    },
    {
        titulo : 'Exercícios',
        descricao : 'Avance por níveis progressivos e aumente suas habilidades passo a passo.'
    },
    {
        titulo : 'Desafios',
        descricao : 'Teste seus conhecimentos com exercícios práticos e estimulantes.'
    },

]
    return(
        <>
            <CabecalhoInicial/>
            <Carrosel/>
            <main className={estilos.container2}>
            <div className={estilos.containerPrincipalCaixas}>
            {listaItem.map((item, index) => (
                        <ItemInicial 
                            key={index} 
                            titulo={item.titulo} 
                            descricao={item.descricao}  
                        />
                    ))}
            </div>
        </main>
        </>
    )
}
export default TelaInicial