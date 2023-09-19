import { ICelular } from "interface/ICelular"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import marcas from "../../json/celulares.json"
import styles from "./Vitrine.module.scss"
import NotFound from "../../pages/NotFound"
import Botao from "../../components/Botao"
import { FiSearch } from "react-icons/fi"


const Vitrine = () => {
  const [vitrine, setVitrine] = useState<ICelular[]>([])

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    if (id === "Samsung") {
      setVitrine(marcas.Samsung)
    }
    else if (id === "Xiaomi") {
      setVitrine(marcas.Xiaomi)
    }
    else if (id === "iPhone") {
      setVitrine(marcas.iPhone)
    }



  }, [id])

  const voltar = () => {
    navigate(-1)
  }

  return (
    <div className={styles.vitrine}>
      <div className={styles.vitrine_nav}>
        <Botao onClick={voltar}> Voltar</Botao>
        <form >
          <input type="text"
            placeholder="Buscar..."
          />
          <button>
            <FiSearch size={25} />
          </button>
        </form>
      </div>
      <div className={styles.vitrine_container}>

        {
          vitrine.map((celular: ICelular) => (
            <div key={celular.modelo} className={styles.cardVitrine}>
              <div className={styles.cardVitrine_Imagem}>
                <img src={celular.imagem} alt="" />
              </div>
              <div className={styles.cardVitrine_Modelo}>{celular.modelo}</div>
              <div className={styles.cardVitrine_Preco}> R$ 2000</div>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}
export default Vitrine