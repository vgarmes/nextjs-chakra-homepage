import { Styles, mode } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: props => ({
    body: {
      bg: mode('background.light', 'background.dark')(props)
    },
    '.grid-item-thumbnail': {
      borderRadius: '12px'
    }
  })
}

export default styles
