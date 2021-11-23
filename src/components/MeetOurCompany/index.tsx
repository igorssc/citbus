import Image from 'next/image'
import Logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export const MeetOurCompany = () => {
  return (
    <div className={styles.container}>
      <h1>Conheça a Santa Luzia Fretamento e Turismo</h1>
      <div>
        <Image src={Logo} alt="Santa Luzia Fretamento e Turismo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ut eros auctor, commodo nisi et, commodo lorem. Curabitur commodo
          tempor quam fermentum interdum. Etiam bibendum dui at elit accumsan
          facilisis. Maecenas vitae nisl suscipit, elementum purus in, aliquet
          nisl. Mauris egestas dui non ornare egestas. Aliquam eget lectus eget
          arcu varius imperdiet in vel arcu. Aliquam erat volutpat. Morbi
          sodales, ex vel lacinia porta, justo lacus imperdiet tortor, sit amet
          efficitur ex sapien vitae nisi. Aliquam varius mauris vitae urna
          sodales, vel hendrerit lorem euismod.
        </p>
      </div>
    </div>
  )
}
