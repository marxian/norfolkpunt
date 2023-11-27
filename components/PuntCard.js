import React from 'react'
import { Box, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
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
        textAlign="center"
        pb={3}
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
        <Heading
          display="block"
          fontSize="2xl"
          color={'gray.800'}
          fontWeight="bold"
        >
          <LinkOverlay as={Link} href={`/boats/${slug}`}>
            {punt.name}
          </LinkOverlay>
        </Heading>
        <span fontSize="sm" color={'gray.700'}>
          {punt.sailNumber}
        </span>
      </Box>
    </LinkBox>
  )
}

export default PuntCard
