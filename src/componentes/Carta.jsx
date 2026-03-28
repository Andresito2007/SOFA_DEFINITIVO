// 4ER COMOPONENTE : NUESTRA SECCION DEL MENU CON SU BOTON 

import { Link } from "react-router-dom"; //Para navegar entre nuestras paginas
import styl from "../estilos/estilos.module.css"; // LA VARIABLE VA TENER TODAS LAS PROPS DE MODULE.CSS
function SOFACARTA(){
    return (
      <div className={styl.seccion_menu}>
         <section className="reserva-section py-5 ">
            <div>
              <div>
                  <div className={styl.carta1}>
                     <p className={styl.carta1}>Disfruta nuestra variada carta, pensada en cada momento del día.</p>

                      <p className={styl.carta2}>Perfecta para todos los gustos y compartir buenos momentos.</p>
                        <Link to="/cartasofa" className={styl.btnOutline}>
                            NUESTRA CARTA
                        </Link>
                   </div>
                 </div>
               </div>
         </section>
      </div>
    )
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE SOFACARTA

export default SOFACARTA;
