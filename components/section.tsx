import { motion, MotionProps } from 'framer-motion'
import { chakra, ComponentWithAs, shouldForwardProp } from '@chakra-ui/react'

// Chakra animated components doesn't let us pass a transition duration prop
// so we create our own component with Chakra Factory
const FadeIn = chakra(motion.div, {
  shouldForwardProp: prop => {
    // allow all props as long as they are chakra props and 'transition' prop
    return shouldForwardProp(prop) || prop === 'transition'
  }
}) as ComponentWithAs<'div', MotionProps>

interface SectionProps {
  delay: number
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => (
  <FadeIn
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </FadeIn>
)

export default Section
