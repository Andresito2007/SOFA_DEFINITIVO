// 3ER COMPONENTE : NUESTRA SECCION DE BIENVENIDA DE SOFA Y CAFE  
import { Link } from "react-router-dom"; //Para navegar entre nuestras paginas
import styl from "../estilos/estilos.module.css";  // LA VARIABLE VA TENER TODAS LAS PROPS DE MODULE.CSS
//CREAMOS LA FUNCION BIENVENIDA
function Bienvenida(){
    return (
      <div className={styl.seccion_bienvenida}>
         <section className="bienvenida-section py-5 ">
               <div className="container">
                 <div className="row align-items-center">
                   <div className={`col-md-7 mb-4 mb-md-0  `}>
                     <img
                       src="https://culturaalternativa.com.br/wp-content/uploads/2018/07/sofa.jpg"
                       alt="seccion reserva"
                       className="img-fluid rounded shadow"
                     />
                   </div>
                   <div className="col-md-5">
                     <h1 className="mb-4 text-warning">SOFA Y CAFE</h1>
                     <p className={styl.parrafo}>Bienvenidos a Sofá Café: aquí eres nuestro invitado.</p>

                      <p className={styl.parrafo}>  Disfruta de fondos, entradas, ensaladas, postres, waffles y cócteles en un ambiente cálido. ¡Reserva tu mesa hoy!</p>

                      <p className={styl.parrafo}>  20 años de historia con un propósito claro: que te sientas invitado.</p>
                      <p className={styl.parrafo}>   Encuéntranos en Barranco, Magdalena, Surco y Miraflores.</p>
                        <Link to="/reservacion" className={styl.btnOutline}>
                            UBICACIONES
                        </Link>
                   </div>
                 </div>
               </div>
             </section>
      </div>
    )
}

// EXPORTAMOS POR DEFECTO EL COMPONENTE 
export default Bienvenida