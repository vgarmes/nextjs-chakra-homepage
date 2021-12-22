import { Colors } from '@chakra-ui/theme'
import { theme as baseTheme } from '@chakra-ui/react'

const { colors: baseColors } = baseTheme

const colors: Colors = {
  black: '#16161D',
  background: {
    light: '#f0e7db',
    dark: '#202023'
  },
  subtleBackground: {
    light: baseColors.whiteAlpha['500'],
    dark: baseColors.whiteAlpha['200']
  },
  glassTeal: '#88ccca'
}

export default colors
