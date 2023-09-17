import styles from "./Cabecalho.module.scss"
import Formulario from "./Formulario"
import {BsCartFill} from "react-icons/bs"


const Cabecalho = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_Container}>

        <div>
          Logo
        </div>

        <div className={styles.header_Container_Interativo}>
          <Formulario/>
          <BsCartFill size={25}/>
        </div>
      </div>

    </header>
  )
}
export default Cabecalho