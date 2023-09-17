import styles from "./Mostruario.module.scss"

const Mostruario = () => {
  return (<section id="mostruario">
    <div className={styles.container}>
      <div className={styles.container_Mostruario}>
        <div className={styles.container_Mostruario_Imagem}>
          <img src="/assets/imagem6.jpg" alt="" />
        </div>
        <div className={styles.container_Mostruario_Botao}>
          <p>Iphone</p>
        </div>
      </div>

      <div className={styles.container_Mostruario}>
        <div className={styles.container_Mostruario_Botao}>
          <p>Samsung</p>
        </div>
        <div className={styles.container_Mostruario_Imagem}><img src="/assets/imagem5.jpg" alt="" /></div>
      </div>

      <div className={styles.container_Mostruario}>
        <div className={styles.container_Mostruario_Imagem}><img src="/assets/imagem8.jpg" alt="" /></div>
        <div className={styles.container_Mostruario_Botao}>
          <p>Xiaomi</p>
        </div>
      </div>



    </div>
  </section>
  )
}
export default Mostruario