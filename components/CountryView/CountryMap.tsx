import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import Map from 'react-map-gl'

interface MapProps {
  latitude: number
  longitude: number
}

const CountryMap: React.FC<MapProps> = ({ latitude, longitude }) => {
  const state = {
    style: {
      width: 305,
      height: 200
    },
    initialState: {
      latitude: latitude,
      longitude: longitude,
      zoom: 4
    }
  }

  const { colorMode } = useColorMode()
  const mapStyle =
    colorMode === 'light'
      ? 'mapbox://styles/mapbox/navigation-day-v1'
      : 'mapbox://styles/mapbox/navigation-night-v1'

  return (
    <Map
      initialViewState={state.initialState}
      style={state.style}
      mapStyle={mapStyle}
      mapboxAccessToken={process.env.MAPBOX_KEY}
    />
  )
}

export default CountryMap
