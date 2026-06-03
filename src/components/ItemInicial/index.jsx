import estilos from './ItemInicial.module.css'

// 1. Adicionamos as chaves { } em volta de titulo e descricao
function ItemInicial({ titulo, descricao }) {
    // 2. Adicionamos a palavra 'return' e parênteses
    return (
        <div className={estilos.item}>
            <h2><i className="fa-solid fa-puzzle-piece"></i> {titulo}</h2>
            <p>{descricao}</p>
        </div>
    );
}

export default ItemInicial;