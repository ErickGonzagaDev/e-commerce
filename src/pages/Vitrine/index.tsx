import { ICelular } from "interface/ICelular"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import marcas from "../../json/celulares.json"
import styles from "./Vitrine.module.scss"
import Botao from "../../components/Botao"
import Formulario from "../../components/Formulario"
import CardVitrine from "./CardVitrine"



const Vitrine = () => {
  const [lista, setLista] = useState<ICelular[]>([])
  const [vitrine, setVitrine] = useState<ICelular[]>([])
  const [procurar, setProcurar] = useState("")

  const navigate = useNavigate()

  const { id } = useParams()

  const voltar = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (id === "Samsung") {
      setLista(marcas.Samsung)
    }
    else if (id === "Xiaomi") {
      setLista(marcas.Xiaomi)
    }
    else if (id === "Apple") {
      setLista(marcas.iPhone)
    }

    else {
      navigate("*")
    }



  }, [id, navigate])




  useEffect(() => {

    setVitrine(lista)

    if (procurar !== "") {
      setVitrine(prev => prev.filter(celular => celular.modelo.toLocaleLowerCase().includes(procurar.toLocaleLowerCase())))
    }

  }, [procurar,lista])


  return (
    <div className={styles.vitrine}>
      <div className={styles.vitrine_nav}>
        <Botao onClick={voltar}> Voltar</Botao>
        <Formulario setProcurar={setProcurar} />
      </div>
      <div className={styles.vitrine_container}>

        {
          vitrine.map((celular: ICelular) => (
            <CardVitrine  key={celular.modelo} celular={celular} id={id} />
          )
          )
        }
      </div>
    </div>
  )
}
export default Vitrine