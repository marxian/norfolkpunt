import React from 'react'
import Link from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Heading,
} from '@chakra-ui/react'

const NavLink = ({ href, children }) => (
  <Link href={href} passHref>
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'white',
        color: 'black',
      }}
      color={'white'}
      fontSize={'xl'}
    >
      {children}
    </ChakraLink>
  </Link>
)

const Nav = () => (
  <Box bg={'black'} p={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>
        <Heading color={'white'} as="h1">
          <Link href="/">Norfolk Punt Owners Association</Link>
        </Heading>
      </Box>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        <NavLink href="/boats">Boats</NavLink>
        <NavLink href="/technicalities">Technicalities</NavLink>
      </HStack>
    </Flex>
  </Box>
)

export default Nav
