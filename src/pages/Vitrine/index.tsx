import { ICelular } from "interface/ICelular"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import marcas from "../../json/celulares.json"
import styles from "./Vitrine.module.scss"
import Botao from "../../components/Botao"
import Formulario from "../../components/Formulario"


const Vitrine = () => {
  const [lista, setLista] = useState<ICelular[]>([])
  const [vitrine, setVitrine] = useState<ICelular[]>([])
  const [procurar, setProcurar] = useState("")

  const navigate = useNavigate()

  const { id } = useParams()

  const voltar = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (id === "Samsung") {
      setLista(marcas.Samsung)
    }
    else if (id === "Xiaomi") {
      setLista(marcas.Xiaomi)
    }
    else if (id === "iPhone") {
      setLista(marcas.iPhone)
    }



  }, [id])



  useEffect(() => {
    setVitrine(lista)

    if (procurar !== "") {
      setVitrine(prev => prev.filter(celular => celular.modelo.toLocaleLowerCase().includes(procurar.toLocaleLowerCase())))
    }
  }, [lista, procurar])



  return (
    <div className={styles.vitrine}>
      <div className={styles.vitrine_nav}>
        <Botao onClick={voltar}> Voltar</Botao>
        <Formulario setProcurar={setProcurar} />
      </div>
      <div className={styles.vitrine_container}>

        {
          vitrine.map((celular: ICelular) => (
            <div key={celular.modelo} className={styles.cardVitrine}>
              <div className={styles.cardVitrine_Imagem}>
                <img src={celular.imagem} alt="" />
              </div>
              {/* <div className={styles.cardVitrine_Marca}><p> {id} </p></div> */}
              <div className={styles.cardVitrine_Modelo}> <h3> {celular.modelo} </h3></div>

              <div className={styles.cardVitrine_Preco}>
                <div className={styles.cardVitrine_Preco_Valor}>

                  <p>A partir de</p>
                  <span>R$ {celular.preco}</span>
                </div>

                <div  className={styles.cardVitrine_Preco_Parcela}>
                  <p>
                    12x de R$ {(celular.preco / 12).toFixed(2)} sem juros ou no pix 10% off R$ {(celular.preco * 90) / 100}
                  </p>
                </div>

              </div>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}
export default Vitrine