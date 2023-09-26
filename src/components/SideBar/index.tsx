import { useContext,} from "react"
import styles from "./SideBar.module.scss"
import Botao from "../../components/Botao"
import CardCarrinho from "./CardCarrinho"
import { CarrinhoContext } from "../../contexts/CarrinhoContext"

const SideBar = () => {

  const { listaCarrinho, total, carrinho, setCarrinho } = useContext(CarrinhoContext)


  const comprou = () => {
    alert("COMPROU!")

  }


  return (
    <div className={carrinho ? styles.carrinhoActive : styles.carrinho} >
      <div onClick={() => setCarrinho(!carrinho)}>X</div>
      <div className={styles.containerCards}>
        {listaCarrinho.length === 0 && <div className={styles.containerCards_Vazio}>Carrinho Vazio</div>}
        {listaCarrinho.map(celular => <CardCarrinho key={celular.modelo} {...celular} />)}
      </div>
      <div className={styles.containerCards_Botao}>
        <span>Total: {total}</span>
        <Botao funcao={comprou}>Comprar</Botao>
      </div>
    </div>
  )
}
export default SideBar