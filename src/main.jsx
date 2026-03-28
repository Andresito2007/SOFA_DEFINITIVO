{/* Esto es un comentario en JSX*/}

{/*EL MAIN ES EL PUNTO DE ENTRADA DE NUESTRA APLICACION,
  ES LO PRIMERO QUE SE CARGA PARA CARGAR LA APLICACION DESDE AQUI IMPORTAMOS NUESTROS ELEMENTOS*/}

{/*IMPORTAMOS EL MODULO DE BOOSTRAP PARA DISEÑAR INTERFACES REUTILIZABLES */}
{/*IMPORTAMOS EL MODULO DE ROUTER-DOM PARA AÑADIR RUTAS A NUESTRA APP DE REACT */}
import { createRoot } from 'react-dom/client'
import './estilos/index.css';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
{/*RENDERIZAMOS NUESTRA PAGINA */}

createRoot(document.getElementById('root')).render(
    // PONEMOS EL BROSW PARA DECIR QUE ESTAMOS UTILIZANDO EL ROUTER
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
)
