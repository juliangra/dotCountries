import { Box, Heading } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import styles from './style.module.css'
import SplashTitle from './SplashTitle'

const Splash = ({}) => {
  const { colorMode } = useColorMode()
  const isLight = colorMode == 'light'

  return (
    <div className={styles.splash}>
      <Heading fontSize="6xl" id="logo">
        dotCountries
      </Heading>
      <Box h="1" w="10" bg={isLight ? 'blue.500' : 'blue.200'} m="2"></Box>

      <SplashTitle />
    </div>
  )
}

export default Splash
