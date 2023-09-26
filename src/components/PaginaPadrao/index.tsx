
import styles from "./PaginaPadrao.module.scss" 
import { Outlet } from "react-router-dom"
import Cabecalho from "../Cabecalho/"
import Footer from "../Footer"
import SideBar from "../SideBar"

const PaginaPadrao = () => {
  return (
    <section className={styles.container}>
      <Cabecalho />
      <SideBar/>
      <Outlet />
      <Footer />
    </section>
  )
}

export default PaginaPadrao