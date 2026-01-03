import Layout from '../components/Layout'
import { getPage } from '../content/fetchers'
import { format, parseISO, compareAsc, isPast, isFuture } from 'date-fns'
import {
  Box,
  Container,
  Heading,
  Icon,
  Text,
  HStack,
  List,
  ListItem,
  Tag,
  TagLabel,
  Link,
  Wrap,
  WrapItem,
  Divider,
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'

import { ExternalLinkIcon } from '@chakra-ui/icons'

function eventDate(s, e) {
  if (!e) {
    return format(s, 'dd MMM yyyy')
  }
  if (s.getMonth() === e.getMonth()) {
    return `${format(s, 'dd')} - ${format(e, 'dd MMM yyyy')}`
  }
  return `${format(s, 'dd MMM')} - ${format(e, 'dd MMM yyyy')}`
}

const tagScheme = {
  'Open Meeting': 'green',
  Regatta: 'teal',
  'Navigation Race': 'orange',
  'Travellers Series': 'blue',
  AGM: 'red',
  EGM: 'red',
  'Committee Meeting': 'gray',
  Social: 'yellow',
}

const Event = ({ event, isPast }) => {
  const start = parseISO(event.start)
  const end = event.end ? parseISO(event.end) : null
  return (
    <Container maxW="container.md">
      <Heading color={isPast ? 'gray.500' : 'black'}>{event.title}</Heading>
      <Wrap>
        <WrapItem>
          <Text color={isPast ? 'gray.500' : 'black'} fontSize={'3xl'}>
            <Icon as={CalendarIcon} color={isPast ? 'gray.500' : 'green.400'} />{' '}
            {eventDate(start, end)}
          </Text>
        </WrapItem>
        <WrapItem>
          <HStack>
            {event.type.sort().map((t) => (
              <Tag
                key={t}
                size={'md'}
                variant="solid"
                colorScheme={isPast ? 'gray' : tagScheme[t] || 'yellow'}
                marginX={'0.5rem'}
              >
                <TagLabel>{t}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </WrapItem>
      </Wrap>

      {event.description && (
        <Box color={isPast ? 'gray.500' : 'black'}>
          <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
            {event.description}
          </ReactMarkdown>
        </Box>
      )}

      {event.link && (
        <>
          <Text color={isPast ? 'gray.500' : 'black'} fontSize={'xl'}>
            <Link href={event.link} isExternal>
              {event.link} <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </>
      )}
    </Container>
  )
}

const Calendar = ({ future, past }) => {
  return (
    <Box p={4} mt="10" mb="10">
      <List spacing={10}>
        {future.map((e) => (
          <ListItem key={e.start}>
            <Event event={e} />
          </ListItem>
        ))}
        {past.length && <Divider />}
        {past.map((e) => (
          <ListItem key={e.start}>
            <Event event={e} isPast />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export async function getStaticProps({ params }) {
  const page = getPage('calendar')

  const events = page.data.events.sort((a, b) => {
    return compareAsc(a.start, b.start)
  })

  const past = events
    .filter((e) => isPast(e.end || e.start))
    .map((e) => ({
      ...e,
      start: format(e.start, 'yyyy-MM-dd'),
      end: e.end ? format(e.end, 'yyyy-MM-dd') : null,
    }))
    .reverse()
  const future = events
    .filter((e) => isFuture(e.start))
    .map((e) => ({
      ...e,
      start: format(e.start, 'yyyy-MM-dd'),
      end: e.end ? format(e.end, 'yyyy-MM-dd') : null,
    }))

  // IMPORTANT: Keep revalidate enabled for calendar page
  // The page uses isPast()/isFuture() to classify events at build time.
  // Without revalidation, events would only move from "future" to "past"
  // sections when the site is deployed. 12-hour revalidation ensures
  // events transition automatically.
  return {
    props: {
      past,
      future,
    },
    revalidate: 43200, // 12 hours - needed for automatic event transitions
  }
}

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Calendar
