
// 9NO COMOPONENTE : NUESTRA SECCION DE LAS UBICACIONES DE LOCALES DE SOFA Y CAFE 

import Imagen_principal2 from './Imagen_principal2'

import Nav from './Nav'

import Footer from './Footer'

import styl from "../estilos/estilos.module.css";

//CREAMOS NUESTRA FUNCION UBICACIONES
function Ubicaciones() {
  return (
    <section className="vip-section py-5">
      <Nav></Nav>
      <div className="container">
        <div className="row align-items-center">
         <div className={`col-md-8 mb-4 mb-md-0 d-flex justify-content-center ${styl.imagenp}`}>
           <Imagen_principal2 />
          </div>
       <div className="col-md-5">
          <h1 className="mb-4 text-primary"></h1>
        </div>
      </div>
     </div>
      <p></p>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 order-md-1 order-2">
            <h1 className="mb-4 text-primary">Barranco</h1>
            <ul>
              <li>Av. San Martín 480</li>
              <li>Horario: 8am a 11pm</li>
              <li>Extras: Menú al isntante</li>
            </ul>
          </div>

          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src="https://th.bing.com/th/id/OIP.Rf5v12s6VNbYn8Lroj0NQwHaEG?w=303&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="SEDE BARRANCO"
              className={styl.imagen_menu}
            />
          </div>
        </div>
      </div>

      <p></p>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <img
              src="https://th.bing.com/th/id/OIP.fhIxTPzBcZQuMTEWXvEWUAHaEM?w=314&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="SEDE MAGDALENA"
              className={styl.imagen_menu}
            />
          </div>

          <div className="col-md-5">
            <h1 className="mb-4 text-primary">Magdalena</h1>
            <ul>
              <li>Av. De La Roca De Vergallo 318 Paseo Fibra</li>
              <li>Precio: 200$ </li>
              <li>Extras: Menú Ejecutivo</li>
            </ul>
          </div>
        </div>
      </div>
      <p></p>
        <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 order-md-1 order-2">
            <h1 className="mb-4 text-primary">Surco</h1>
            <ul>
              <li>Av. Circunvalación del Golf los Incas 134  Patio Panorama</li>
              <li>Horario: 8am a 10pm</li>
              <li>Extras: Menú limitado</li>
            </ul>
          </div>

          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src="https://th.bing.com/th/id/OIP.tdBJ0kvKWW-Dx7GMn1187gHaE9?w=249&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="SEDE SURCO"
              className={styl.imagen_menu}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE UBICACIONES
export default Ubicaciones;
