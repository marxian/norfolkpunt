import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Nav />
    <Box as="main" bg={useColorModeValue('#F9FAFB', 'gray.600')}>
      {children}
    </Box>
    <Footer />
  </>
)

export default Layout
