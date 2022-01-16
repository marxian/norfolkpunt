import React from 'react'
import { Text, Center, Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Image from '../components/Image'

import header from '../public/images/line.jpg'
import twos from '../public/images/twos.jpg'

const Home = () => (
  <>
    <Image
      alt="The start of a race at the Punt Championships"
      placeholder="blur"
      src={header}
      layout="responsive"
    />
    <Center>
      <Text
        w="80%"
        fontSize={['1xl', '2xl', '4xl']}
        fontWeight="bold"
        textAlign="center"
      >
        Pointed at both ends, 22ft long, 22 meters of sail, no maximum spinnaker
        size, no minimum weight.
      </Text>
    </Center>

    <Container>
      <Image
        alt="Two hardchine punts in close racing"
        placholder="blur"
        className="db"
        src={twos}
      />
      <strong>The Norfolk Punt</strong> was derived from the flat-bottomed gun
      punts that roamed the Broadland waters in the mid-to-late 19th century.
      However, at the turn of the 20th Century, in order to get to and from the
      hunting grounds more efficiently, the punters developed their craft to
      carry a basic mast and sail for travelling with the wind. It is from these
      humble beginnings that one of the country&apos;s most exciting and
      powerful racing dinghy classes was born.
    </Container>
  </>
)

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
