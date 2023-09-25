import { Center, Text, Link } from '@chakra-ui/layout'

const Footer = () => {
  return (
    <Center padding={5}>
      Made with{' '}
      <Text color="red.500" padding={1}>
        ♥️
      </Text>{' '}
      by
      <Link href="https://juliangrande.com" isExternal textDecorationLine="underline" padding={1}>
        Julian Grande
      </Link>
    </Center>
  )
}

export default Footer
