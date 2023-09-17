import styles from "./FormasPagamento.module.scss"
import {BsFillCreditCardFill} from "react-icons/bs"

const FormasPagamento = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_Header}>

      <h2>Formas de Pagamento</h2>
      <BsFillCreditCardFill size={30}/>
      </div>

      <div className={styles.container_Cartoes}>
        <img src="https://alliedrecommerce.vtexassets.com/assets/vtex/assets-builder/alliedrecommerce.template-alliedrecommerce/2.1.14/svgs/payments/logo_pix___75fa8222e69330c9bf5329429c8284cf.svg" alt="" />
        <img src="https://alliedrecommerce.vtexassets.com/assets/vtex/assets-builder/alliedrecommerce.template-alliedrecommerce/2.1.14/svgs/payments/Mastercard___eefdeebe41595448f2d20b73595ad339.svg" alt="" />
        <img src="https://alliedrecommerce.vtexassets.com/assets/vtex/assets-builder/alliedrecommerce.template-alliedrecommerce/2.1.14/svgs/payments/Visa___addb5c7bb3c8b344a60fd036bb92659d.svg" alt="" />

        <img src="https://alliedrecommerce.vtexassets.com/assets/vtex/assets-builder/alliedrecommerce.template-alliedrecommerce/2.1.14/imgs/payments-footer/Elo2___9c4a12f23e7b9feee7590210205c57d4.png" alt="" />
      </div>
    </div>
  )
}
export default FormasPagamento