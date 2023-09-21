import CardMostruario from "./CardMostruario"
import styles from "./Mostruario.module.scss"


const Mostruario = () => {
  const listaMostruario = [
    {
      nome: "Apple",
      imagem: {
        url: "assets/imagem6.jpg",
        descricao: "Imagem Iphone"
      },
      lado: "Esquerda"
    },
    {
      nome: "Samsung",
      imagem: {
        url: "assets/imagem5.jpg",
        descricao: "Imagem Samsung"
      },
      lado: "Direita"
    },
    {
      nome: "Xiaomi",
      imagem: {
        url: "assets/imagem8.jpg",
        descricao: "Imagem Xiaomi"
      },
      lado: "Esquerda"
    },
  ]

  return (

    <section className={styles.container}>

      {listaMostruario.map(celular =>
        <CardMostruario key={celular.nome} {...celular} />
      )}

    </section>
  )
}
export default Mostruario