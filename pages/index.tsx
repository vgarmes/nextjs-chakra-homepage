import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Image,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home: NextPage = () => {
  return (
    <Layout>
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hello! My name is Victor. I am a multi-disciplinary engineer whose
            interest in web development started a few years ago when I was
            involved in the back-end development of a monitoring app at my old
            job. After that experience, I decided I wanted to learn more about
            web development so I started an online course on full stack
            development in Ruby on Rails. Ever since then, I have been
            constantly learning and developing my personal projects.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Link>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My portfolio
                </Button>
              </Link>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            Born in Barcelona, Spain.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Front end developer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>
            Videogames, Music, <Link href="https://artstation.com">Art</Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/vgarmes" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @vgarmes
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/vgmestre" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @vgmestre
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/vgmestre" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @vgmestre
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
