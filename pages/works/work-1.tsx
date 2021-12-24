import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Work 1">
      <Container>
        <Title>
          Work 1 <Badge>2021</Badge>
        </Title>
        <Paragraph>
          I&apos;m baby live-edge kale chips authentic, skateboard hella direct
          trade food truck chia. Squid tumeric marfa shaman typewriter gastropub
          meh polaroid. Wolf salvia snackwave gluten-free schlitz letterpress +1
          hashtag unicorn. Chillwave art party glossier roof party venmo, master
          cleanse ethical normcore bicycle rights craft beer tilde poke artisan
          franzen. Unicorn vegan etsy actually listicle chillwave pitchfork
          enamel pin bitters. Slow-carb man bun lumbersexual bespoke kombucha.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://example.com">
              https://example.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOs/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React, NextJS</span>
          </ListItem>
          <ListItem>
            <Meta>Blog</Meta>
            <Link href="https:/example.com">
              How I made a web app with NextJS <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/work1.jpg" alt="work 1" />
        <WorkImage src="/images/works/work2.jpg" alt="work 2" />
      </Container>
    </Layout>
  )
}

export default Work
