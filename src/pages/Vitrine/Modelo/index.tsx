import styles from './Modelo.module.scss'
import {useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import marcas from "../../../json/celulares.json"
import { ICelular } from "interface/ICelular"
import Botao from '../../../components/Botao'
import { BsShield } from "react-icons/bs"
import { HiOutlineBadgeCheck } from "react-icons/hi"
import { LiaShippingFastSolid } from "react-icons/lia"
import { CgSmartphone } from "react-icons/cg"
import { CarrinhoContext } from '../../../contexts/CarrinhoContext'




const Modelo = () => {
  const [lista, setListaCelular] = useState<ICelular>()

  const { id, name } = useParams()

  const { addCarrinho, listaCarrinho } = useContext(CarrinhoContext)



  useEffect(() => {

    setListaCelular(marcas[id].find((obj: ICelular) => obj.modelo === name))

  }, [id, lista, name])

  const handleAddToCart = () => {
    if (lista) {
      addCarrinho(lista)
    }
    console.log(listaCarrinho)
  }


  const navigate =useNavigate()
  
  const voltar = () => {
    navigate(-1)
  }


  return (

    <>
    <div className={styles.botao}>
      <Botao funcao={voltar} >Voltar</Botao>
    </div>
      <div className={styles.container}>

        <div className={styles.container_Imagem}>
          <img src={lista?.imagem} alt="" />
        </div>

        <div className={styles.container_Modelo}>
          <h2>
            {lista?.modelo}
          </h2>
          <p>Camera: {lista?.camera_principal}</p>
          <p>Armazenamento: {lista?.armazenamento_interno}</p>
          <p>Ram: {lista?.memoria_ram}</p>
          <p>Resolução: {lista?.tela}</p>
          <p>Lançamento: {lista?.ano_lancamento}</p>
          <p>Modelo: {lista?.modelo}</p>
        </div>

        <div className={styles.container_Preco}>
          <div className={styles.container_Preco_Valor}>
            <h2>
              R$ <span>{lista?.preco}</span>
            </h2>
            <p><span>10% OFF</span> no PIX</p>
            <p>
              Ou R$ {((lista?.preco * 90) / 100).toFixed(2)} à vista
              Até 12x R$ {(lista?.preco / 12).toFixed(2)} sem juros
            </p>
          </div>

          <div className={styles.container_Preco_Beneficios}>
            <p> <LiaShippingFastSolid />  Receba em seu endereço</p>
            <p> <HiOutlineBadgeCheck /> Produto vendido e entregue por ...</p>
            <p> <BsShield /> 90 dias de garantia</p>
            <p> <CgSmartphone />Produto original com Nota Fiscal</p>
          </div>


          <Botao funcao={handleAddToCart}>Adicionar ao Carrinho</Botao>

        </div>

      </div>

    </>
  )
}
export default Modelo