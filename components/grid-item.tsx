import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

interface GridItemProps {
  href: string
  title: string
  thumbnail: StaticImageData
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  href,
  title,
  thumbnail
}) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

interface WorkGridItemProps {
  id: string
  title: string
  thumbnail: StaticImageData
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  children,
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
