import { Box, Flex } from '@chakra-ui/layout'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => (
  <Flex flexDirection={'column'} sx={{ minHeight: '100vh' }}>
    <Nav />
    <Box as="main" bg={'gray.50'} sx={{ flex: 1 }}>
      {children}
    </Box>
    <Footer />
  </Flex>
)

export default Layout
