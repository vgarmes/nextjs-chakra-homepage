import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import work1img from '../public/images/works/work1.jpg'
import work2img from '../public/images/works/work2.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="work-1" title="My Work 1" thumbnail={work1img}>
            My work number 1
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="work-2" title="My Work 2" thumbnail={work2img}>
            My work number 2
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
