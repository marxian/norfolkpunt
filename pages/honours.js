import Layout from '../components/Layout'
import { getBoatBySlug, getPage } from '../content/fetchers'
import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react'

const Honours = ({ seasons }) => {
  return (
    <>
      <Stack
        marginTop={10}
        spacing={4}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'}>Honours List</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>
            The best records we can find for Broadland open races in which Punts
            commonly compete
          </em>
        </Text>
      </Stack>
      <Box p={4} mt="10" mb="10">
        {seasons.map(([year, events]) => (
          <Container as="section" key={year}>
            <Heading as="h3">{year}</Heading>
            <List>
              {events.map(({ name, boat, helm, crew }) => (
                <ListItem key={`${name}${year}`}>
                  {`${name} - ${boat.name} (${boat.sailNumber}) - ${helm}${
                    crew ? ' & ' : ''
                  }${crew || ''}`}
                </ListItem>
              ))}
            </List>
          </Container>
        ))}
      </Box>
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = getPage('honours')

  const events = []
  // Resolve boat data from winner slug
  for (const event of page.data.events) {
    const {
      data: { name, sailNumber },
    } = await getBoatBySlug(event.winner)
    event.boat = { name, sailNumber }
    events.push(event)
  }
  // Group by year
  const seasonsMap = events.reduce((acc, event) => {
    ;(acc[event.year] = acc[event.year] || []).push(event)
    return acc
  }, {})
  let seasons = Object.entries(seasonsMap)
  // Sort events by name
  seasons = seasons.map(([year, events]) => [
    year,
    events.sort((a, b) => a.name.localeCompare(b.name)),
  ])
  // Sort years ascending
  seasons = seasons.sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
  return {
    props: {
      seasons,
    },
    revalidate: 43200,
  }
}

Honours.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Honours
