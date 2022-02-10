import Image from 'next/image'
import { animateScroll as scroll, Link } from 'react-scroll'
import logoImg from '../../../assets/logo.png'
import styles from './styles.module.scss'

export const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={logoImg}
          alt="logotipo Santa Luzia Transporte e Fretamento"
        />
      </div>
      <div className={styles.optionsMenu}>
        <ul>
          <li className={styles.active} onClick={scrollToTop}>
            Home
          </li>
          <Link
            to="meetOurCompany"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Empresa</li>
          </Link>
          <Link
            to="ourBusinessSummary"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Serviços</li>
          </Link>
          <Link
            to="ourDifferences"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Diferenciais</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Contato</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
