import { Spinner, Flex } from '@chakra-ui/react'

const LoadingSpinner = () => (
  <Flex 
    h={`100vh`} 
    flexDir={`column`}
    alignItems={`center`}
    justifyContent={`center`}
    backgroundColor={`transparent`}
  >
    <Spinner
      thickness={`1em`}
      speed={`1s`}
      emptyColor={`gray.200`}
      color={`red`}
      size={`xl`}
    />
  </Flex>
)

export default LoadingSpinner
