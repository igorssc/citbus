import styles from './styles.module.scss'

export const OurBusinessSummary = () => {
  return (
    <div className={styles.container} id="ourBusinessSummary">
      <div className={styles.content}>
        <h1>Nosso negócio</h1>
        <p>
          Somos referência no mercado de fretamento e turismo, atuando em duas
          frentes de trabalho:
        </p>
        <h2>Fretamento contínuo para empresas:</h2>
        <p>Transporte de funcionários para empresas.</p>
        <h2>Fretamento eventual:</h2>
        <p>Viagens para pessoa física ou jurídica;</p>
        <p>Translado entre aeroporto e hotéis;</p>
        <p>Transporte de pequenas cargas dentro do Estado;</p>
        <p>Eventos corporativos, escolares, turismo, lazer, etc.</p>
      </div>
    </div>
  )
}
