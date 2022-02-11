import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { AdditionalInformation } from '../components/AdditionalInformation'
import { Footer } from '../components/Footer'
import { ResponsiveHeader } from '../components/ResponsiveHeader'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { BackdropProvider } from '../hooks/useBackdrop'
import '../styles/Globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <BackdropProvider>
          <ResponsiveHeader />
          <Component {...pageProps} />
          <AdditionalInformation />
          <Footer />
          <WhatsAppButton />
        </BackdropProvider>
      </SnackbarProvider>
    </>
  )
}

export default MyApp
