import Layout from '../../components/Layout'
import { getBoatBySlug, getPage } from '../../content/fetchers'
import {
  Box,
  Container,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Stack,
} from '@chakra-ui/react'

const YardstickLog = ({ decisions }) => {
  return (
    <>
      <Stack
        marginTop={10}
        spacing={4}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'}>Yardstick Decision Log</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>
            A chronological log of yardstick changes. We may be able to extend
            it backwards with work. But it&apos;ll will be kept up to date in
            future.
          </em>
        </Text>
      </Stack>
      <Box p={4} mt="10" mb="10">
        {decisions.map(({ date, rationale, boatsAffected }) => (
          <Container as="section" key={`${date}-${rationale?.length || 0}`}>
            <Heading as="h3">{date}</Heading>
            {rationale ? <Text>{rationale}</Text> : null}
            <UnorderedList>
              {boatsAffected.map(({ name, slug, sailNumber, from, to }) => (
                <ListItem key={slug}>
                  {`${name} (${sailNumber}) from ${from} to ${to}`}
                </ListItem>
              ))}
            </UnorderedList>
          </Container>
        ))}
      </Box>
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = getPage('yardstick-change-log')

  const decisions = []
  // Resolve boat data from winner slug
  for (const { decision } of page.data.decisions) {
    const boatsAffected = []
    if (decision.boatsAffected) {
      for (const effect of decision.boatsAffected) {
        const {
          data: { name, sailNumber },
        } = await getBoatBySlug(effect.slug)
        boatsAffected.push({
          ...effect,
          name,
          sailNumber,
        })
      }
    }
    decisions.push({
      ...decision,
      boatsAffected,
    })
  }

  return {
    props: {
      decisions,
    },
  }
}

YardstickLog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default YardstickLog
