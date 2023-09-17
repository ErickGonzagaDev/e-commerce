import Botao from '../Botao'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div>
        <Botao>Compre já</Botao>
      </div>
    </section>
  )
}
export default Banner