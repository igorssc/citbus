import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/404.module.scss'

const NotFound: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>:( Ops...</h1>
        <h1>Não conseguimos encontrar a página que você procura</h1>
        <Link href="/">
          <button>Página inicial</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
