import React from 'react'
import { Link, Text, SimpleGrid } from '@chakra-ui/react'

const Footer = () => (
  <SimpleGrid bg="black" color="white" columns={[1, 2, 3, 4]}>
    <Link href={'mailto:norfolkpunt@gmail.com'} color={'white'}>
      Contact Us
    </Link>
    <Link href={'/admin.html'} color={'white'} target="_blank">
      Log In
    </Link>
    <Text>
      &copy;{new Date().getFullYear()} Norfolk&nbsp;Punt Owners&nbsp;Association
    </Text>
    <Text>
      Most photographs by kind permission &copy;&nbsp;
      <Link href="https://www.myerscoughpictures.org.uk">
        Robin&nbsp;Myerscough
      </Link>
    </Text>
  </SimpleGrid>
)

export default Footer
