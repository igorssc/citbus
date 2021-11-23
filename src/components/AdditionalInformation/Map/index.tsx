import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
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
    googleMapsApiKey: 'AIzaSyCzl3spoo2n7Z9lmv0ceRINOkQyr_71Wy8'
  })

  return (
    <div className={styles.container}>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
