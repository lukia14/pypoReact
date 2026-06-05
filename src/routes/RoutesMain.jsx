import { Route,Routes } from "react-router-dom";
import Mundo from "../pages/MundoPagina";
import Fase from "../pages/Fase";
import Loja from "../pages/Loja";
import TelaInicial from "../pages/TelaInicial";
import NotFound from "../pages/NotFound";
function RoutesMain(){
    return(
    <Routes>
        <Route path='/' element={<TelaInicial/>}/>
        <Route path='/mundo' element={<Mundo/>}/>
        <Route path='/loja' element={<Loja/>}/>
        <Route path='/fase' element={<Fase/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    )
}
export default RoutesMain