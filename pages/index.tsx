import type { NextPage } from 'next'
import {
  Container,
  Box,
  Heading,
  Text,
  useColorMode,
  Button
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" align="center" p={3} mb={6}>
        Hello, Im Victor
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Victor Garcia
          </Heading>
          <Text>Front End Developer</Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
