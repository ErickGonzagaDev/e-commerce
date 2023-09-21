import { ICelular } from "interface/ICelular"
import styles from "./CardVitrine.module.scss"
import { Link } from "react-router-dom"

interface CardVitrineProps {
  celular: ICelular
  id:string | undefined

}

const CardVitrine = ({celular,id}:CardVitrineProps) =>{

  return(
    <Link to={`/modelo/${id}/${celular.modelo}`} className={styles.cardVitrine}>
              <div className={styles.cardVitrine_Imagem}>
                <img src={celular.imagem} alt="" />
              </div>
              <div className={styles.cardVitrine_Modelo}>
                <h3> {celular.modelo}
                </h3></div>

              <div className={styles.cardVitrine_Preco}>
                <div className={styles.cardVitrine_Preco_Valor}>
                  <p>A partir de</p>
                  <span>R$ {celular.preco}</span>
                </div>

                <div className={styles.cardVitrine_Preco_Parcela}>
                  <p>
                    12x de R$ {(celular.preco / 12).toFixed(2)} sem juros ou no pix 10% off R$ {(celular.preco * 90) / 100}
                  </p>
                </div>

              </div>
            </Link>
  )
}

export default CardVitrine