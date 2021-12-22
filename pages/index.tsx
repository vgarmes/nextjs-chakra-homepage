import type { NextPage } from 'next'
import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Image
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        textAlign="center"
        p={3}
        mb={6}
        bg={useColorModeValue(
          'subtleBackground.light',
          'subtleBackground.dark'
        )}
      >
        Hello, Im Victor
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Victor Garcia
          </Heading>
          <Text>Front End Developer</Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpg"
            alt="profile image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
