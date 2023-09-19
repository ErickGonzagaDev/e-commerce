import { useNavigate } from "react-router-dom"
import Botao from "../../components/Botao"
import styles from "./NotFound.module.scss"

const NotFound = () => {
  const navigate = useNavigate()
  const voltar = () => {
    navigate("/")

  }
  return (
    <div className={styles.container}>
      <h1> 404 - Página não encontrada</h1>
      <Botao onClick={voltar}>Voltar</Botao>
    </div>
  )
}
export default NotFound
