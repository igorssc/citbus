import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import leftArrow from '../../assets/left_arrow.svg'
import awards from '../../assets/our_differences/awards.png'
import certifications from '../../assets/our_differences/certifications.png'
import ourDrivers from '../../assets/our_differences/our_drivers.png'
import ourTeam from '../../assets/our_differences/our_team.png'
import punctuality from '../../assets/our_differences/punctuality.png'
import security from '../../assets/our_differences/security.png'
import structure from '../../assets/our_differences/structure.png'
import sustainabilityEcology from '../../assets/our_differences/sustainability_ecology.png'
import rightArrow from '../../assets/right_arrow.svg'
import styles from './styles.module.scss'

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  return (
    <button
      className={`${styles.arrow} ${styles.left}`}
      onClick={() => onClick()}
    >
      <Image src={leftArrow} />
    </button>
  )
}

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  return (
    <button
      className={`${styles.arrow} ${styles.right}`}
      onClick={() => onClick()}
    >
      <Image src={rightArrow} />
    </button>
  )
}

const CustomLeftArroww = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', left: 0 }}>{'<'}</div>
    </div>
  )
}

export const OurDifferences = () => {
  const responsive = {
    superLargeDesktop: {
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
      <div className={styles.content}>
        <h1>Nossos diferenciais</h1>
        <Carousel
          responsive={responsive}
          className={styles.carousel}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={punctuality} objectFit="contain" />
            </div>
            <h1>Pontualidade</h1>
            <p>Somos referência quando se trata de pontualidade.</p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={ourDrivers} objectFit="contain" />
            </div>
            <h1>Motoristas qualificados</h1>
            <p>
              Contamos com motoristas treinados e altamente qualificados, que
              passam por reciclagem periódica do Curso de Direção Defensiva.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={ourTeam} objectFit="contain" />
            </div>
            <h1>Equipe capacitada</h1>
            <p>
              Equipe de profissionais à disposição 24 horas, em todos os dias da
              semana, inclusive feriados
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={security} objectFit="contain" />
            </div>
            <h1>Segurança e conforto</h1>
            <p>
              Possuímos veículos que oferecem conforto, segurança, inovação e
              que atendem às normas regulamentadoras vigentes.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={structure} objectFit="contain" />
            </div>
            <h1>Estrutura</h1>
            <p>
              Contamos com garagem própria, com espaço para manutenção e limpeza
              interna e externa dos veículos.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={certifications} objectFit="contain" />
            </div>
            <h1>Certificações</h1>
            <p>Contamos com certificações NBR ISO 9001:2015 e Cadastrur</p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={sustainabilityEcology} objectFit="contain" />
            </div>
            <h1>Sustentabilidade</h1>
            <p>
              Possuímos um Programa de Gerenciamento de Resíduos Sólidos
              Especiais (PGRSE), sistema de reciclagem de água para reutilização
              no lava-jato.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={awards} objectFit="contain" />
            </div>
            <h1>Premiação verde</h1>
            <p>
              Somos vencedores do prêmio Fretam de Qualidade do Ar, através do
              Despoluir - Programa Ambiental de Transporte.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
