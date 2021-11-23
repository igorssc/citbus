import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactAlert } from '../components/ContactAlert'
import { FormContact } from '../components/FormContact'
import { MeetOurCompany } from '../components/MeetOurCompany'
import { OurBusinessSummary } from '../components/OurBusinessSummary'
import { OurDifferences } from '../components/OurDifferences'
import { OurPartners } from '../components/OurPartners'
import { Slide } from '../components/Slide'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Santa Luzia Fretamento e Turismo</title>
        <meta
          name="description"
          content="Santa Luzia Fretamento e Turismo possui mais de 40 anos de experiência no ramo de transportes, oferecendo aos seus clientes - além de qualidade, conforto, segurança e inovação"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Slide />
      <MeetOurCompany />
      <OurBusinessSummary />
      <OurDifferences />
      <OurPartners />
      <FormContact />
      <ContactAlert />
    </div>
  )
}

export default Home
