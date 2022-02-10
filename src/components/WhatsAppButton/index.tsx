import Image from 'next/image'
import whatsappIcon from '../../assets/whatsapp.svg'
import styles from './styles.module.scss'

export const WhatsAppButton = () => {
  return (
    <a
      className={styles.container}
      href="https://api.whatsapp.com/send?phone=5531991207600"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={whatsappIcon}
        alt="WhatsApp"
        width="35px"
        height="35px"
        className={styles.icon}
      />
    </a>
  )
}
