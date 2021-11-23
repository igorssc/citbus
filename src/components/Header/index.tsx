import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header = () => {
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
          <Link href="/" passHref>
            <li className={styles.active}>Home</li>
          </Link>
          <Link href="/" passHref>
            <li>Empresa</li>
          </Link>
          <Link href="/" passHref>
            <li>Serviços</li>
          </Link>
          <Link href="/" passHref>
            <li>Frota</li>
          </Link>
          <Link href="/" passHref>
            <li>Contato</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
