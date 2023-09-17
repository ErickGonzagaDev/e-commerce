
import styles from "./PaginaPadrao.module.scss" 
import { Outlet } from "react-router-dom"
import Cabecalho from "../Cabecalho/"
import Footer from "../Footer"

const PaginaPadrao = () => {
  return (
    <section className={styles.container}>
      <Cabecalho />
      <Outlet />
      <Footer />
    </section>
  )
}

export default PaginaPadrao