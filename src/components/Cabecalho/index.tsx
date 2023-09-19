import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.scss"
import {BsCartFill} from "react-icons/bs"


const Cabecalho = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_Container}>

        <Link to="/">
          Logo
        </Link>

        <div className={styles.header_Container_Carrinho}>
          
          <BsCartFill size={25}/>
          
        </div>
      </div>

    </header>
  )
}
export default Cabecalho