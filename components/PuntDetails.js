import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  Link,
} from '@chakra-ui/react'

import Story from '../components/Story'
import Image from '../components/Image'

function PuntDetails({ punt, image }) {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex display={'block'}>
          <Image
            rounded={'md'}
            {...image.img}
            placeholder="blur"
            blurDataURL={image.base64}
            alt={punt.name}
            layout="responsive"
            align={'center'}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {punt.name}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={<StackDivider borderColor={'gray.200'} />}
          >
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={'yellow.500'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Details
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stat>
                  <StatLabel>Sail Number</StatLabel>
                  <StatNumber>{punt.sailNumber}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Year Built</StatLabel>
                  <StatNumber>{punt.yearBuilt}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Handicap</StatLabel>
                  <StatNumber>{punt.handicap}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Design</StatLabel>
                  <StatNumber>{punt.design}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Designer</StatLabel>
                  <StatNumber>{punt.designer}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Builder</StatLabel>
                  <StatNumber>{punt.builder}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Construction</StatLabel>
                  <StatNumber>{punt.construction}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Length</StatLabel>
                  <StatNumber>{punt.loa} ft</StatNumber>
                </Stat>
              </SimpleGrid>
            </Box>
            {punt.stories && (
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'yellow.500'}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Stories
                </Text>

                <List spacing={2}>
                  {punt.stories.map(({ story, author }, i) => (
                    <ListItem key={`${author}${i}`}>
                      <Story story={story} author={author} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'yellow.500'}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Ownership History
                </Text>

                <List spacing={2}>
                  {punt.owners.map(({ from, to, owner }, i) => (
                    <ListItem key={`${owner}${i}`}>
                      {from} - {to || 'present'} {owner}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'yellow.500'}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Measurements
                </Text>

                <List spacing={2}>
                  {punt.hullMeasurements?.map(({ date, weight, forms }, i) => (
                    <ListItem key={`${date}${i}`}>
                      Hull measured {date} {weight ? `at ${weight}lbs` : null}{' '}
                      {forms ? (
                        <Link
                          href={forms}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          (view details)
                        </Link>
                      ) : null}
                    </ListItem>
                  )) || <ListItem>Hull measurement awaiting evidence</ListItem>}
                  {punt.sailMeasurements?.map(({ date, area, forms }, i) => (
                    <ListItem key={`${date}${i}`}>
                      Sails measured {date} {area ? `at ${area}sqm` : null}{' '}
                      {forms ? (
                        <Link
                          href={forms}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          (view details)
                        </Link>
                      ) : null}
                    </ListItem>
                  )) || <ListItem>Sail measurement awaiting evidence</ListItem>}
                </List>
              </Box>
            </SimpleGrid>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default PuntDetails
