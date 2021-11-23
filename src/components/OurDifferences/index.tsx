import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import sustainabilityEcology from '../../assets/sustainability_ecology.png'
import styles from './styles.module.scss'

type OurDifferencesProps = {
  deviceType?: string
}

export const OurDifferences = (props: OurDifferencesProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <div className={styles.container}>
      <h1>Nossos diferenciais</h1>
      <Carousel
        responsive={responsive}
        className={styles.carousel}
        autoPlay={props.deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={5000}
        infinite={true}
      >
        <div className={styles.item}>
          <Image src={sustainabilityEcology} className={styles.icon} />
          <h1>Lorem Ipsum</h1>
          <p>
            Integer eu massa ut urna accumsan hendrerit a eget libero. Cras
            neque magna, tempor nec aliquet eget, vulputate ac tortor. Curabitur
            euismod eros vel finibus rutrum.
          </p>
        </div>
        <div className={styles.item}>
          <Image src={sustainabilityEcology} className={styles.icon} />
          <h1>Lorem Ipsum</h1>
          <p>
            Integer eu massa ut urna accumsan hendrerit a eget libero. Cras
            neque magna, tempor nec aliquet eget, vulputate ac tortor. Curabitur
            euismod eros vel finibus rutrum.
          </p>
        </div>
        <div className={styles.item}>
          <Image src={sustainabilityEcology} className={styles.icon} />
          <h1>Lorem Ipsum</h1>
          <p>
            Integer eu massa ut urna accumsan hendrerit a eget libero. Cras
            neque magna, tempor nec aliquet eget, vulputate ac tortor. Curabitur
            euismod eros vel finibus rutrum.
          </p>
        </div>
        <div className={styles.item}>
          <Image src={sustainabilityEcology} className={styles.icon} />
          <h1>Lorem Ipsum</h1>
          <p>
            Integer eu massa ut urna accumsan hendrerit a eget libero. Cras
            neque magna, tempor nec aliquet eget, vulputate ac tortor. Curabitur
            euismod eros vel finibus rutrum.
          </p>
        </div>
        <div className={styles.item}>
          <Image src={sustainabilityEcology} className={styles.icon} />
          <h1>Lorem Ipsum</h1>
          <p>
            Integer eu massa ut urna accumsan hendrerit a eget libero. Cras
            neque magna, tempor nec aliquet eget, vulputate ac tortor. Curabitur
            euismod eros vel finibus rutrum.
          </p>
        </div>
      </Carousel>
    </div>
  )
}
