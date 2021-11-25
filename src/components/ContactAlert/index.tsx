import Image from 'next/image'
import arrow from '../../assets/up_arrow.svg'
import styles from './styles.module.scss'

export const ContactAlert = () => {
  return (
    <div className={styles.container}>
      <Image src={arrow} height="50px"></Image>
      <h1>ENTRE EM CONTATO E FAÇA HOJE MESMO SEU ORÇAMENTO</h1>
      <h2>Envie-nos também suas dúvidas e opiniões. Queremos ouvir de você!</h2>
    </div>
  )
}
