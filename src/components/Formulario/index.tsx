import React, { SetStateAction, useState } from "react"
import styles from "./Formulario.module.scss"
import { FiSearch } from "react-icons/fi"

interface FormularioProps {
  setProcurar: React.Dispatch<SetStateAction<string>>
}

const Formulario = ({ setProcurar }: FormularioProps) => {
 

  // const submitar = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setProcurar(e.target.value)
  //   filtrarVitrine(procurar)
  // }


  return (
    <form className={styles.formulario}>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={e => setProcurar(e.target.value)}
      />
      <button>
        <FiSearch size={25} />
      </button>
    </form>
  )
}

export default Formulario