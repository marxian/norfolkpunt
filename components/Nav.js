import React from 'react'
import Link from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Text,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
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
      <LinkBox>
        <Link href="/" passHref>
          <LinkOverlay>
            <Heading color={'white'} as="h1">
              Norfolk Punt{' '}
              <Text as="span" color={'gray.400'} fontSize={'2xl'}>
                Owners Association
              </Text>
            </Heading>
          </LinkOverlay>
        </Link>
      </LinkBox>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        <NavLink href="/boats">Boats</NavLink>
        <NavLink href="/technicalities">Technicalities</NavLink>
      </HStack>
    </Flex>
  </Box>
)

export default Nav
