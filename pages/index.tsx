import { Center, Flex } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Search from '../components/Search/Search'
import Splash from '../components/Splash/Splash'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dotCountries - Geography encyclopædia</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Flex height={'85vh'} alignContent={'center'} justifyContent={'center'}>
        <Center>
          <div>
            <Splash />
            <Search />
          </div>
        </Center>
      </Flex>
    </>
  )
}

export default Home
