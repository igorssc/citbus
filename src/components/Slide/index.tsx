import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles from './styles.module.scss'

export const Slide = () => {
  const fadeImages = [
    './images/slide/slide-1.jpg',
    './images/slide/slide-2.jpg',
    './images/slide/slide-3.jpg'
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
        <div className="each-fade">
          <img src={fadeImages[2]} className={styles.slide} />
        </div>
      </Fade>
    </div>
  )
}
