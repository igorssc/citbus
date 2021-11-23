import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useState } from 'react'
import styles from './styles.module.scss'

const containerStyle = {
  width: '400px',
  height: '400px'
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

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds()
    // map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className={styles.container}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker onLoad={onLoad} position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
