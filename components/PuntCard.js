import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Image from '../components/Image'
import Link from 'next/link'

const PuntCard = ({ punt, slug, image }) => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={15}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Link href={`/boats/${slug}`}>
        <a>
          <Box
            w="xs"
            bg={useColorModeValue('white', 'gray.800')}
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
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="bold"
              >
                {punt.name}
              </Heading>
              <span
                fontSize="sm"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                {punt.sailNumber}
              </span>
            </Box>
          </Box>
        </a>
      </Link>
    </Flex>
  )
}

export default PuntCard
