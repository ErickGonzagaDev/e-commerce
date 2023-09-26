import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.scss"
import { BsCartFill } from "react-icons/bs"
import { useContext } from "react"
import { CarrinhoContext } from "../../contexts/CarrinhoContext"



const Cabecalho = () => {
   const { listaCarrinho,setCarrinho,carrinho } = useContext(CarrinhoContext)


  return (
    <header className={styles.header}>
      <nav className={styles.header_Container}>
        <Link to="/">
          Logo
        </Link>

        <div className={styles.header_Container_Carrinho}>
          {listaCarrinho.length > 0 && <div className={styles.header_Container_Carrinho_Contador}> {listaCarrinho.length}</div>}
          <BsCartFill onClick={() => setCarrinho(!carrinho)} size={25} />
        </div>
      </nav>

    </header>
  )
}
export default Cabecalho