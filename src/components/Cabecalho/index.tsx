import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.scss"
import Formulario from "./Formulario"
import {BsCartFill} from "react-icons/bs"


const Cabecalho = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_Container}>

        <Link to="/">
          Logo
        </Link>

        <div className={styles.header_Container_Interativo}>
          {/* <Formulario/> */}
          <BsCartFill size={25}/>
        </div>
      </div>

    </header>
  )
}
export default Cabecalho