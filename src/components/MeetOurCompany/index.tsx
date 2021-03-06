import Image from 'next/image'
import ourFleet from '../../assets/our_fleet.jpg'
import styles from './styles.module.scss'

export const MeetOurCompany = () => {
  return (
    <div className={styles.container} id="meetOurCompany">
      <h1>Conheça a Santa Luzia Fretamento e Turismo</h1>
      <div>
        <Image src={ourFleet} alt="Santa Luzia Fretamento e Turismo" />
        <p>
          Empresa do Grupo Rodap, a Santa Luzia Fretamento e Turismo possui mais
          de 40 anos de experiência no ramo de transportes, oferecendo aos seus
          clientes além de qualidade, conforto, segurança e inovação, um serviço
          personalizado que conta com uma frota completa e submetida a rigorosos
          critérios de manutenção preventiva, e uma equipe de profissionais
          capacitada e empenhada em garantir a melhoria contínua na prestação de
          serviços.
        </p>
      </div>
    </div>
  )
}
