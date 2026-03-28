
// 5TO COMPONENTE : NUESTRA IMAGEN PRINCIPAL2 DE SOFA Y CAFE 

import styl from "../estilos/estilos.module.css";
// CREAMOS NUESTRA FUNCION IMAGEN QUE RETORNARA UNA IMAGEN DENTRO DE UN DIV
function Imagen(){
    return(
        <div className={styl.imagen_sofa}>
            <img src="https://th.bing.com/th/id/R.58cb2f2fe9ef69aabf33472464d32efb?rik=ncLaBm1cYfyP8w&pid=ImgRaw&r=0"></img>
        </div>
    )
}

// EXPORTAMOS POR DEFECTO EL COMPONENTE IMAGEN

export default Imagen;