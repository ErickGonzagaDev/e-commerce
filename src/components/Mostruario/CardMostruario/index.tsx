import { Link } from "react-router-dom"
import styles from "./CardMostruario.module.scss"

interface CelularProps {
  nome: string
  imagem: {
    url: string,
    descricao: string
  }
  lado: string
}

const CardMostruario = ({ nome, imagem, lado }: CelularProps) => {

  return (

    <Link to={`/vitrine/${nome}`}  className={styles.card} style={lado === "Direita" ? { flexDirection: "row-reverse" } : {}}>
      <div className={styles.card_Imagem}>
        <img src={imagem.url} alt={imagem.descricao} />
      </div>
      <div className={styles.card_Botao}>
        <p>{nome}</p>
      </div>
    </Link >

  )
}
export default CardMostruario