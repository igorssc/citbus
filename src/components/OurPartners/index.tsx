import styles from './styles.module.scss'

export const OurPartners = () => {
  const partnersImg = [
    '/images/partnes/partner-01.jpg',
    '/images/partnes/partner-02.jpg',
    '/images/partnes/partner-03.jpg',
    '/images/partnes/partner-04.jpg',
    '/images/partnes/partner-05.jpg',
    '/images/partnes/partner-06.jpg',
    '/images/partnes/partner-07.jpg',
    '/images/partnes/partner-08.jpg',
    '/images/partnes/partner-09.jpg',
    '/images/partnes/partner-10.jpg',
    '/images/partnes/partner-11.jpg',
    '/images/partnes/partner-12.jpg',
    '/images/partnes/partner-13.jpg',
    '/images/partnes/partner-14.jpg',
    '/images/partnes/partner-15.jpg'
  ]

  return (
    <div className={styles.container}>
      <h1>Empresas que confiam em nossos serviços</h1>
      <div className={styles.partners}>
        {partnersImg.map(partner => (
          <img src={partner} key={partner}></img>
        ))}
      </div>
    </div>
  )
}
