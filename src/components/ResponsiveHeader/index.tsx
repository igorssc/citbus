import { ContactDetails } from './ContactDetails'
import { Header } from './Header'
import styles from './styles.module.scss'

export const ResponsiveHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <ContactDetails />
        </div>
        <div className={styles.second}>
          <Header />
        </div>
      </div>
    </>
  )
}
