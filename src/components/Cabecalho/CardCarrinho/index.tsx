
import { useContext } from "react"
import { ICelular } from "../../../interface/ICelular"
import styles from "./CardCarrinho.module.scss"
import { CarrinhoContext } from "../../../contexts/CarrinhoContext"
import { BsTrash } from "react-icons/bs"



const CardBanner = (celular: ICelular) => {
  const { excluirCarrinho } = useContext(CarrinhoContext)



  return (
    <div onClick={()=> excluirCarrinho(celular)} className={styles.container}>
      <div className={styles.container_Lixo}><BsTrash size={16}/></div>
      <img src={celular.imagem} width={60} alt="" />
      <div>
        <p>
          {celular.modelo}
        </p>
        <p>
          R$ <span>{celular.preco}</span>
        </p>
      </div>


    </div>
  )
}

export default CardBanner