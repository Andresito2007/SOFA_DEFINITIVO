
// 6TO COMPONENTE : NUESTRA SECCION DE ATENCION DE SOFA Y CAFE 

import { Link } from "react-router-dom";
import styl from "../estilos/estilos.module.css";

// CREAMOS NUESTRA FUNCION SECCION_RESERVAS 
function Seccion_Reservas(){
    return (
      <div className={styl.seccion_atencion}>
         <div className={styl.fondo}>
               <div className="container">
                 <div className="row align-items-center">
                   <div className={`col-md-7 mb-4 mb-md-0 `}>
                     <p></p>
                     <img
                       src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/af/d1/a9/ila-nueva-la-lucha.jpg?w=900&h=500&s=1"
                       alt="seccion reserva"
                       className="img-fluid rounded shadow"
                     />
                    </div>
                    <div className="col-md-5">
                     <h1 className="mb-4 text-warning">LISTOS PARA ATENDERTE</h1>
                     <p>De lunes a domingo</p>
                     <p></p>
                     <p>10:00 am a 10:45 pm</p>
                     <p>Apuesta por la Creatividad en todas sus formas</p>
                        <Link to="/login" className={styl.btnOutline}>
                            REGISTRARSE
                        </Link>
                   </div>
                 </div>
               </div>
          </div>
      </div>
    )
}

// EXPORTAMOS POR DEFECTO EL COMPO SECCION RESERVA
export default Seccion_Reservas