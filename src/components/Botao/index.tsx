
import styles from "./Botao.module.scss"

interface BotaoProps {
  children: string
  funcao : () => void
}

const Botao = ({ children,funcao }: BotaoProps) => {
  return (
    <button onClick={() => {funcao()}} className={styles.botao}>{children}</button>
  )
}
export default Botao