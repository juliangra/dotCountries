import { Text } from "@chakra-ui/layout";
import { Typewriter } from 'react-simple-typewriter'

const SplashTitle = () => {

  return (
    <div>
      <Text fontSize="2xl" mb="5">
        Geography - {' '}
        <Typewriter
          words={['Made easy', 'All in one place', 'Summarized']}
          loop={1}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </Text>
    </div>

  )
}

export default SplashTitle;
