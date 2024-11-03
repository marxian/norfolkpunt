import React from 'react'
import Link from 'next/link'
import {
  Flex,
  Spacer,
  Stack,
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
  <Flex p="1.5rem" bg={'black'}>
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
    <Spacer />
    <Stack direction={['column', 'row']}>
      <NavLink href="/boats">Boats</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/honours">Honours</NavLink>
      <NavLink href="/calendar">Calendar</NavLink>
      <NavLink href="/technicalities">Technicalities</NavLink>
    </Stack>
  </Flex>
)

export default Nav
