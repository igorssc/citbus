import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <div className={styles.container}>
      &copy; 2021 - Santa Luzia Fretamento e Turismo
      <br />
      <br />
      Criado e desenvolvido por{' '}
      <a href="http://www.igsdesign.com.br" target="_blank" rel="noreferrer">
        <b>IGS DESIGN</b>
      </a>
    </div>
  )
}
