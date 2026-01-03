import React from 'react'
import { Box, Heading, LinkBox, LinkOverlay, Badge } from '@chakra-ui/react'
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
        position="relative"
      >
        {punt.forSale && (
          <Badge
            position="absolute"
            top={2}
            right={2}
            colorScheme="red"
            fontSize="md"
            px={3}
            py={1}
            borderRadius="md"
            zIndex={10}
            textTransform="uppercase"
            fontWeight="bold"
          >
            For Sale
          </Badge>
        )}
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
          <Link href={`/boats/${slug}`} passHref>
            <LinkOverlay>{punt.name}</LinkOverlay>
          </Link>
        </Heading>
        <span fontSize="sm" color={'gray.700'}>
          {punt.sailNumber}
        </span>
      </Box>
    </LinkBox>
  )
}

export default PuntCard
