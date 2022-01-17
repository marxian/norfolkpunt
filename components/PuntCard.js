import React from 'react'
import { Flex, Box, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Image from '../components/Image'
import Link from 'next/link'

const PuntCard = ({ punt, slug, image }) => {
  return (
    <LinkBox>
      <Box
        w="xs"
        bg="white"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          {...image.img}
          w="full"
          h={56}
          fit="cover"
          placeholder="blur"
          blurDataURL={image.base64}
          alt={punt.name}
        />

        <Box py={5} textAlign="center">
          <Heading
            display="block"
            fontSize="2xl"
            color={'gray.800'}
            fontWeight="bold"
          >
            <Link href={`/boats/${slug}`} passHref>
              <LinkOverlay>{punt.name}</LinkOverlay>
            </Link>
          </Heading>
          <span fontSize="sm" color={'gray.700'}>
            {punt.sailNumber}
          </span>
        </Box>
      </Box>
    </LinkBox>
  )
}

export default PuntCard
