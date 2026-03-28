// 1ER COMPONENTE : NUESTRA BARRA DE NAVEGACION CON BOOSTRAP

//CREAMOS NUESTRA FUNCION NAV QUE RETORNARA 
function Nav() {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#inicio">SOFA CAFE</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#carta">CARTA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ubicaciones">UBICACIONES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ubicaciones">NOSOTROS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reservar">REGISTRARSE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE NAV 

export default Nav;