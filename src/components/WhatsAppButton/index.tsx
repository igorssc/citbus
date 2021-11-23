import Image from 'next/image'
import whatsappIcon from '../../assets/whatsapp.svg'
import styles from './styles.module.scss'

export const WhatsAppButton = () => {
  return (
    <div className={styles.container}>
      <Image
        src={whatsappIcon}
        alt="WhatsApp"
        width="35px"
        height="35px"
        className={styles.icon}
      />
    </div>
  )
}
