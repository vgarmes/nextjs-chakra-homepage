import { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

const Link: ComponentStyleConfig = {
  baseStyle: props => ({
    color: mode('#3d7aed', '#ff63c3')(props),
    textUnderlineOffset: 3
  })
}

export default Link
