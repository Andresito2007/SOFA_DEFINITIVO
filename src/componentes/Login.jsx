
// 10MO COMPONENTE : NUESTRA SECCION DE LOGUEO DE SOFA Y CAFE 
import '../estilos/Login.css'; // Importo los estilos del login
import { useState } from "react"; // Hook para manejar estados en React
import { User, Lock } from "lucide-react"; // Iconos que uso para darle mejor diseño al logueo
import Bienvenida from "./Bienvenida"; // Componente al que voy a redirigir después del login

function Login() {
  // Estado para guardar lo que el usuario escribe en el input de nombre
  const [nombre, setNombre] = useState("");
  // Estado para la contraseña
  const [contrasena, setContrasena] = useState("");
   // Estado para validar si hay campos vacíos
  const [campoVacio, setCampoVacio] = useState(false);
  // Estado para controlar si pasamos a la siguiente vista
  const [irAReservas, setIrAReservas] = useState(false);

  // Función flecha que se ejecuta cuando el usuario envía el formulario
  const manejarSubmit = (e) => {
    e.preventDefault(); // CON EL EVENTO LE DAMOS  PARA EVITAR EL COMPORTAMIENTO POR DEFECT DEL NAVEGADOR PARA
    // NO PERDER LOS ESTADOS DE REACT
    if (nombre === "" || contrasena === "") {
      setCampoVacio(true);
      return;
    }
     // Si todo está bien cambio el false a true de reservas
    setCampoVacio(false);
    setIrAReservas(true)
  
  };
  // Si el usuario ya inició sesión correctamente,
  // muestro el componente de bienvenida
  if (irAReservas){
    return <Bienvenida></Bienvenida>
  }
  // ONSUBMIT ES UN EVENTO QUE Se ejecuta cuando hacemos clic en el boton 
  return (
    <div className="login-fondo">

      <div className="login-icono-usuario">
        <User size={45} color="white" />
      </div>

      <h1 className="login-titulo">INICIO DE SESION</h1>
  
      <form className="login-formulario" onSubmit={manejarSubmit}> 

        <div className="login-input-grupo">
          <User size={20} color="#aaa" />
          <input
            type="text"
            value={nombre}
            // EL ONCHANGE VA A CAPUTAR UN EVENTO DENTRO DEL INPUT
            onChange={(e) => setNombre(e.target.value)} // EL ESTADO VA TENER LO QUE INGRESE EN EL INPUT
            placeholder="Email"
          />
        </div>

        <div className="login-input-grupo">
          <Lock size={20} color="#aaa" />
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
         {/* Mensaje de error si faltan datos */}
        {campoVacio && (
          <p className="login-error">Todos los campos son obligatorios</p>
        )}

        <button type="submit">Ingresar</button>

      </form>
    </div>
  );
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE LOGIN
export default Login;