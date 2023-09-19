import styles from "./Botao.module.scss"

interface BotaoProps {
  children: string
  onClick : ()=> void
}

const Botao = ({ children,onClick }: BotaoProps) => {
  return (
    <button onClick={onClick} className={styles.botao}>{children}</button>
  )
}
export default Botao