import styles from './CardMenor.module.scss'
import { FaTruckFast } from "react-icons/fa6"
import { MdSecurity } from "react-icons/md"
import { AiTwotoneStar } from "react-icons/ai"
import { BsClockHistory } from "react-icons/bs"

const CardMenor = () => {
  return (<section className={styles.container}>
    <div className={styles.container_Card}>
      <p>
        Melhor avaliação do mercado
      </p>

      <div>
         <AiTwotoneStar size={24}/>
         <AiTwotoneStar size={24}/>
         <AiTwotoneStar size={24}/>
         <AiTwotoneStar size={24}/>
         <AiTwotoneStar size={24}/>
       </div>
    </div>

    <div className={styles.container_Card}>
      <p>
        Agilidade
      </p>

      <div>
        <BsClockHistory size={24}/>
      </div>
    </div>

    <div className={styles.container_Card}>
      <p>
        Seguraça
      </p>
      <div>
        <MdSecurity size={24}/>
      </div>
    </div>

    <div className={styles.container_Card}>
      <p>
        Frete grátis
      </p>

      <div>
        <FaTruckFast size={24}/>
      </div>
    </div>
  </section>
  )
}

export default CardMenor