import React from 'react'
import {
  Text,
  Center,
  Container,
  FormControl,
  Input,
  FormLabel,
  Button,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import Image from '../components/Image'
import { getNotices } from '../content/fetchers'

import header from '../public/images/site/line.jpg'
import twos from '../public/images/site/twos.jpg'

const Home = ({ notices }) => (
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
        placeholder="blur"
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

    {notices.length &&
      notices.map((notice) => {
        return (
          <Container key={notice.title} marginTop={'2em'}>
            <Center>
              <Heading
                w="50%"
                fontSize={['1xl', '2xl', '4xl']}
                fontWeight="bold"
                HeadingAlign="center"
              >
                {notice.title}
              </Heading>
            </Center>
            <Flex display={'block'}>
              <Image
                rounded={'md'}
                {...notice.image.img}
                placeholder="blur"
                blurDataURL={notice.image.base64}
                alt={'fixme'}
                layout="responsive"
                align={'center'}
              />
            </Flex>
            {notice.html}
          </Container>
        )
      })}

    <Container
      mt="2em"
      mb="2em"
      border={'1px solid black'}
      borderRadius={'lg'}
      px={'1.5em'}
      py={'1.5em'}
    >
      <Center>
        <Heading size={'lg'} as="h2">
          Punt Natters
        </Heading>
      </Center>
      <Text>
        Subscribe to receive occasional emails containing relevant news and
        announcements.
      </Text>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/norfolk_punt"
        method="post"
        target="popupwindow"
        rel="noopener noreferrer"
        onSubmit="window.open('https://buttondown.email/norfolk_punt', 'popupwindow')"
      >
        <Flex mt="5">
          <FormControl variant="floating">
            <Input id="bd-email" name="email" type="email" placeholder="  " />
            <FormLabel htmlFor="email">Email address</FormLabel>
          </FormControl>
          <Button type="submit">Subscribe</Button>
        </Flex>
      </form>
      <Center mt="5">
        <Text as="em">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://buttondown.email/norfolk_punt/archive"
          >
            view previous editions
          </Link>
        </Text>
      </Center>
    </Container>
  </>
)

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export async function getStaticProps({ params }) {
  const notices = await getNotices()
  return {
    props: {
      notices,
    },
    revalidate: 43200,
  }
}

export default Home
