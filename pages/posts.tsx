import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// import images here
// import thumbnailPost1 from '../public/images/contents/my-image-from-a-post.png
import thumbnailPic from '../public/images/works/work1.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My post"
            thumbnail={thumbnailPic}
            href="https://example.com"
          ></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
