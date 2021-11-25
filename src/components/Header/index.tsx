import Image from 'next/image'
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
import logoImg from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Empresa',
        link: '/'
      },
      {
        text: 'Serviços',
        link: '/'
      },
      {
        text: 'Frota',
        link: '/'
      },
      {
        text: 'Contato',
        link: '/'
      }
    ],
    logo: {
      text: ''
    },
    class: 'o',
    style: {
      barStyles: {
        background: '#fff',
        boxShadow: 'none'
      },
      sidebarStyles: {
        background: '#555',
        buttonColor: '#222'
      },
      linkStyles: {
        color: '#222'
      }
    }
  }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={logoImg}
          alt="logotipo Santa Luzia Transporte e Fretamento"
        />
      </div>
      {/* <div className={styles.optionsMenu}>
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
      </div> */}
      <Navbar {...props} />
    </header>
  )
}
