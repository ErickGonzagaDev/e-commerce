import Botao from "../../components/Botao"
import styles from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1> 404 - Página não encontrada</h1>
      <Botao>Voltar</Botao>
    </div>
  )
}
export default NotFound
