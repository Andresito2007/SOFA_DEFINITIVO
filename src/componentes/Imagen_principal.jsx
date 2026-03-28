// 2DO COMPONENTE : NUESTRA IMAGEN PRINCIPAL DE SOFA Y CAFE 
import styl from "../estilos/estilos.module.css";
//IMPORTAMOS POR MODULES.CSS PARA DARLE ESTILO A NUESTRA IMAGEN
//EL MODULES.CSS una forma de usar CSS donde los estilos son locales al componente y podemos usarlas 
// como propiedades con el punto.

// CREAMOS NUESTRA FUNCION IMAGEN PRINC. QUE RETORNARA UNA IMAGEN DENTRO DE UN DIV
function Imagen_principal() {
  return (
    <div className={styl.img}>
      <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t51.82787-15/636682776_18107216173811193_6437257101950264573_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=pxoZNkqZIIkQ7kNvwGtAPR6&_nc_oc=AdohsFiW79IRIDUe6gI3-qUUEqCuhGOfkHEUL335gEZWbPUVj51JUqcTsxpW5cWnYBQZkPmSnMtn68tZH-mNwxPv&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=kGlH32C_OtSMuIaMlLcaqQ&_nc_ss=7a30f&oh=00_AfxFHfRoLJuS3lbfCP9L08qJtQsZS88sxruRkt_1Q4tXRQ&oe=69C764B8"></img>
    </div>
    
  );
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE IMAGEN_PRINCIPAL
export default Imagen_principal;
