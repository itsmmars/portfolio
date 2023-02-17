import { Spinner, Flex } from '@chakra-ui/react'

const MSpinner = () => (
  <Flex 
    h={`100vh`} 
    flexDir={`column`}
    alignItems={`center`}
    justifyContent={`center`}
    backgroundColor={`transparent`}
  >
    <Spinner
      w={`8em`}
      h={`8em`}
      thickness={`2em`}
      speed={`1.5s`}
      emptyColor={`gray.100`}
      color={`red`}
    />
  </Flex>
)

export default MSpinner
