import Image from 'next/image'
import styles from './styles.module.scss'

export const OurPartners = () => {
  const partnersImg = [
    '/images/partnes/partner-01.jpg',
    '/images/partnes/partner-02.jpg',
    '/images/partnes/partner-03.jpg',
    '/images/partnes/partner-04.jpg',
    '/images/partnes/partner-05.jpg',
    '/images/partnes/partner-06.jpg'
  ]

  return (
    <div className={styles.container}>
      <h1>Empresas que confiam em nossos serviços</h1>
      <div className={styles.partners}>
        {partnersImg.map(partner => (
          <Image
            src={partner}
            key={partner}
            width="100%"
            height="100%"
            className={styles.partnersLogo}
          ></Image>
        ))}
      </div>
    </div>
  )
}
