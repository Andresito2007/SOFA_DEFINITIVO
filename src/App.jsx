//IMPORTAMOS NUESTROS COMPONENTES Y MODULOS A NUESTRA APP,JSX

// APP=LA CAJA DE UN ROMPECABEZAS
// LOS DEMAS COMPONENTES = LAS PIEZAS QUE COLOCAS

// SI EXPORTAMOS POR DEFECTO PODEMOS IMPORTARLO CON CUALQUIER NOMBRE

import { Routes, Route } from "react-router-dom"; // IMPORTAMOS LAS PROPIEDADES DEL MODULO ROUTER-DOM
import Nav from './componentes/Nav'; // NUESTRA BARRITA DE NAVEGACION
import Imagen_principal from './componentes/Imagen_principal'; // NUESTRA IMAGEN PRINCIPAL
import Bienvenida from './componentes/Bienvenida'; // NUESTRA SECCION DE BIENVENIDA
import Carta from './componentes/Carta'; // NUESTRA SECCION PARA IR AL MENU
import Imagen_principal2 from './componentes/Imagen_principal2'; // NUESTRA IMAGEN DE LA SECCION DEL MENU
import Atencion from './componentes/Atencion'; // SECCION PARA ATENDER AL USUARIO Y MANDARLO A REGISTRAR
import Footer from './componentes/Footer'; // NUESTRA PARTE FINAL DE NUESTRA PAGINA 
//NUESTRA SECCION DE LOGUEO CUANDO EL CLIENTE SE VA A REGISTRAR
import Login from './componentes/Login';
//NUESTRA SECCION DEL MENU DE CARTA Y SOFA CUANDO EL CLIENTE SE VA A NUESTRA CARTA
import Carta_Sofa from './componentes/CartaSofa';
//NUESTRA SECCION DE LOCALES DE CARTA Y SOFA CUANDO EL CLIENTE SE VA A UBICACIONES
import Reservacion from './componentes/Ubicaciones'; 
//IMPORTAMOS NUESTRO ESTILOS DE INDEX.CSS
import './estilos/index.css';

function App() {
  return (
    <section className="contenerdorPide_Ya">
      {/* NUESTRAS RUTAS , ROUTES EL APARTADO DONDE VA ESTAR TODAS NUESTRAS RUTAS PRINCIPALES Y ESTAS RUTAS SE DEFINEN CON ROUTE */}
      <Routes>
        {/* Página principal , path= nombre de la ruta  , element= lo que se va a mostrar*/}
        <Route path="/" element={
          <>
            <div id="navegacion">
              <Nav></Nav>
            </div>
            <div id="inicio">
              <Imagen_principal />
            </div>
            <div id="ubicaciones">
              <Bienvenida />
            </div>
            <div id="carta">
                <Carta></Carta>
                <Imagen_principal2></Imagen_principal2>
            </div>
            <div id="reservar">
              <Atencion />
            </div>
            <div id="footer">
                <Footer />
            </div>
          </>
        } />
        {/* RUTA POR EVENTO , CUANDO LE DE CLICK A NUESTROS BOTONES (COMPONENTES) */}
        <Route path="/reservacion" element={<Reservacion></Reservacion>} />
        <Route path="/cartasofa" element={<Carta_Sofa></Carta_Sofa>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </section>
  );
}
//EXPORTAMOS POR DEFECTO EL APP
export default App;