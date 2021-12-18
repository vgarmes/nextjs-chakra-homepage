import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  ChakraProps
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface LinkItemProps {
  href: string
  path: string
}

const LinkItem: React.FC<LinkItemProps> = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

interface NavbarProps {
  path: string
  sx?: ChakraProps['sx']
}

const Navbar: React.FC<NavbarProps> = ({ path, sx }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      sx={{ ...sx }}
    >
      Navbar
    </Box>
  )
}

export default Navbar
