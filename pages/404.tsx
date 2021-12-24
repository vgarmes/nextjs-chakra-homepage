import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container
      height="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={12} align="center">
        <NextLink href="/" passHref>
          <Link>
            <Button colorScheme="teal">Return to home</Button>
          </Link>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
