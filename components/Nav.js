import React from 'react'
import Link from 'next/link'
import { Box, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react'

const NavLink = ({ href, children }) => (
  <Link href={href} passHref>
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
    >
      {children}
    </ChakraLink>
  </Link>
)

const Nav = () => (
  <Box bg={'gray.100'} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>Norfolk Punt Owners Association</Box>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        <NavLink href="/boats">Boats</NavLink>
        <NavLink href="/pictures">Pictures</NavLink>
        <NavLink href="/technicalities">Technicalities</NavLink>
      </HStack>
    </Flex>
  </Box>
)

export default Nav
