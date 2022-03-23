import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import HPlatform, { HMap } from 'react-here-map'
import styles from './styles.module.scss'

const containerStyle = {
  width: '100%',
  height: '500px'
}

const center = {
  lat: -19.783173,
  lng: -43.913964
}

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_GOOGLE || ''
  })

  return (
    <div className={styles.container}>
      <HPlatform
        app_id="yWR9EG5RrS2psLSzT3ZS"
        apikey="SJf4aVIFV4BMcJi48m33kcSPNVx6Ff3iFoAv4rNuvsE"
        useCIT
        // useHTTPS
        includeUI
        includePlaces
      >
        <HMap
          style={{
            height: '400px',
            width: '800px'
          }}
          mapOptions={{ center: { lat: 52.5321472, lng: 13.3935785 } }}
        />
      </HPlatform>
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            <Marker position={center} />
          </GoogleMap>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
