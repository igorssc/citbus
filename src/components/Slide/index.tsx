import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles from './styles.module.scss'

export const Slide = () => {
  const fadeImages = [
    './images/slide/slide-1.png',
    './images/slide/slide-1.png'
  ]

  return (
    <div className={styles.container}>
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} className={styles.slide} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} className={styles.slide} />
        </div>
      </Fade>
    </div>
  )
}
