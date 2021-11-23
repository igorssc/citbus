import Image from 'next/image'
import emailIcon from '../../assets/email.svg'
import phoneIcon from '../../assets/phone.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import styles from './styles.module.scss'

export const ContactDetails = () => {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <Image src={phoneIcon} alt="Telefone" />
          <span>(31) 3517-7601</span>
        </div>
        <div>
          <Image src={whatsappIcon} alt="WhatsApp" />
          <span>(31) 3517-7601</span>
        </div>
        <div>
          <Image src={emailIcon} alt="Email" />
          <span>fretamento@rodap.com.br</span>
        </div>
      </header>
    </div>
  )
}
