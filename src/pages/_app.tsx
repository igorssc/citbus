import type { AppProps } from 'next/app'
import { AdditionalInformation } from '../components/AdditionalInformation'
import { Footer } from '../components/Footer'
import { ResponsiveHeader } from '../components/ResponsiveHeader'
import { WhatsAppButton } from '../components/WhatsAppButton'
import '../styles/Globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveHeader />
      <Component {...pageProps} />
      <AdditionalInformation />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default MyApp
