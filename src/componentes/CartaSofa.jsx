
// 8TAVO COMPONENTE : NUESTRA SECCION DE LOS PLATILLOS DE SOFA Y CAFE 

import Imagen_principal2 from './Imagen_principal2'
import Nav from './Nav'
import Footer from './Footer'
import styl from "../estilos/estilos.module.css";

//CREAMOS NUESTRA FUNCION CARTA_SOFA
function Cartaa_Sofa() {
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
            <h1 className="mb-4 text-primary">Tostones crujientes con palta fresca y huevos pochados</h1>
            <ul>
              <li>Av. San Martín 480</li>
              <li>Horario: 8am a 11pm</li>
              <li>Extras: Menú al isntante</li>
            </ul>
          </div>

          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/635121227_1362911539197955_3206961218285777751_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=wXluziKO5eQQ7kNvwHTMgwN&_nc_oc=Ado-jLnAuRqKHgAqGmOns98LeyevNIiUm-kVzv5EEPKgb5PCzScDdWxGPeqHRhJplamzqo0uuu9nK0Pc_YY_tEqP&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=-SOVdhKDkrPNalrvKodL6A&_nc_ss=7a30f&oh=00_AfyaxCDVEO6_P_2xUkGvZ5Xsh5gn6ngIJOhfdtTxnuCIhA&oe=69C8A575"
              alt="RESERVACION DE TIPO NORMAL"
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
              src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/496660713_3089026374587261_1542511346370792505_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0327a3&_nc_ohc=kBMWKWpD0EoQ7kNvwH1D3f1&_nc_oc=Adokdjb-ijX9npAyFXXE_czW1WIV_UerN0cwgKFduh38XK_UaGbkUUZQehSlRwek84MGubARcl4LQGw44XoFY6VM&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Ty7Ips7NBTTjwjniCagGqQ&_nc_ss=7a30f&oh=00_Afwzom3nljiemUyRoOO5StIeC5IN9ljk9NqLOQ5eQgIbGA&oe=69C8B474"
              alt="VIP"
              className={styl.imagen_menu}
            />
          </div>

          <div className="col-md-5">
            <h1 className="mb-4 text-primary">Capresse Divano</h1>
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
            <h1 className="mb-4 text-primary">Carrot Cake</h1>
            <ul>
              <li>Av. Circunvalación del Golf los Incas 134  Patio Panorama</li>
              <li>Horario: 8am a 10pm</li>
              <li>Extras: Menú limitado</li>
            </ul>
          </div>

          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCDnrNC3jfzUUmmqLfLP-_FNAZ30ZubQIA7Du86WkEp2IaFpY6"
              alt="RESERVACION DE TIPO NORMAL"
              className={styl.imagen_menu}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE CARTA_SOFA
export default Cartaa_Sofa;