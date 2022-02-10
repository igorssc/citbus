import Image from 'next/image'
import emailIcon from '../../../assets/email.svg'
import phoneIcon from '../../../assets/phone.svg'
import whatsappIcon from '../../../assets/whatsapp.svg'
import styles from './styles.module.scss'

export const ContactDetails = () => {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <a href="tel:+55 31 3517-7601">
            <Image src={phoneIcon} alt="Telefone" />
            <span>(31) 3517-7601</span>
          </a>
        </div>
        <div>
          <a href="tel:+55 31 99120-7600">
            <Image src={whatsappIcon} alt="WhatsApp" />
            <span>(31) 99120-7600</span>
          </a>
        </div>
        <div>
          <a href="mailto:fretamento@rodap.com.br">
            <Image src={emailIcon} alt="Email" />
            <span>fretamento@rodap.com.br</span>
          </a>
        </div>
      </header>
    </div>
  )
}
