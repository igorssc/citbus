import type { AppProps } from 'next/app'
import { AdditionalInformation } from '../components/AdditionalInformation'
import { ContactDetails } from '../components/ContactDetails'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { WhatsAppButton } from '../components/WhatsAppButton'
import '../styles/Globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContactDetails />
      <Header />
      <Component {...pageProps} />
      <AdditionalInformation />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default MyApp
