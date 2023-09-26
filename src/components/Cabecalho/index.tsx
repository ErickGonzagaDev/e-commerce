import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.scss"
import { BsCartFill } from "react-icons/bs"
import { useContext, useState } from "react"
import { CarrinhoContext } from "../../contexts/CarrinhoContext"
import CardCarrinho from "./CardCarrinho"
import Botao from "../../components/Botao"


const Cabecalho = () => {
  const { listaCarrinho, total } = useContext(CarrinhoContext)
  const [carrinho, setCarrinho] = useState(false)

  const comprou = () => {
    console.log("comprou!!!")
  }

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

      <div className={carrinho ? styles.carrinhoActive : styles.carrinho} >
        <div onClick={() => setCarrinho(!carrinho)}>X</div>
        <div className={styles.containerCards}>
          {listaCarrinho.length === 0 && <div className={styles.containerCards_Vazio}>Carrinho Vazio</div> }
         {listaCarrinho.map(celular => <CardCarrinho key={celular.modelo} {...celular} />)}
        </div>
        <div className={styles.containerCards_Botao}>
          <span>Total: {total}</span>
          <Botao funcao={comprou}>Comprar</Botao>
        </div>
      </div>
    </header>
  )
}
export default Cabecalho