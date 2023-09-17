import styles from "./Formulario.module.scss"
import {FiSearch} from "react-icons/fi"

const Formulario = () => {
  return (
    <form className={styles.formulario}>
      <input type="text"
        placeholder="Buscar..."
      />
      <button>
        <FiSearch size={25} />
      </button>
    </form>
  )
}

export default Formulario