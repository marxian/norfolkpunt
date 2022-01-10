import React from 'react'
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react'

const Footer = () => (
  <Box color="white" bg={'black'} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Link href={'mailto:norfolkpunt@gmail.com'} color={'white'}>
        Contact
      </Link>
      <Text>
        &copy;{new Date().getFullYear()} Norfolk&nbsp;Punt
        Owners&nbsp;Association
      </Text>
      <Text>
        Most photographs by kind permission &copy;&nbsp;
        <Link href="https://www.myerscoughpictures.org.uk">
          Robin&nbsp;Myerscough
        </Link>
      </Text>
    </Flex>
  </Box>
)

export default Footer
