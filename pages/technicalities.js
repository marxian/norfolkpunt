import Layout from '../components/Layout'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  OrderedList,
  ListItem,
  Divider,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { StarIcon, DownloadIcon } from '@chakra-ui/icons'

function Committee() {
  return (
    <Box p={4} mt="10">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Committee</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>
            The Committee is elected annually at the Owners&apos; Association
            AGM. It consists of a Chair, Secretary, the class Measurers and
            representatives of the Hardchine, One-off, and Traditional fleets,
            along with representation from Hickling Broad Sailing Club.
          </em>
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Chair</Text>
              <Text color={'gray.600'}>Rupert Redington</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Secretary</Text>
              <Text color={'gray.600'}>Bill Glover</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Measurer</Text>
              <Text color={'gray.600'}>Dick Roe</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Measurer</Text>
              <Text color={'gray.600'}>Simon Clayton</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Traditional Representative</Text>
              <Text color={'gray.600'}>Ruth Owen</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Hardchine Representative</Text>
              <Text color={'gray.600'}>(vacant)</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>One-off Representative</Text>
              <Text color={'gray.600'}>Alastair Drew</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Wroxham Representative</Text>
              <Text color={'gray.600'}>Richard Parker</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Morrison Representative</Text>
              <Text color={'gray.600'}>Max Dixey</Text>
            </VStack>
          </HStack>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={StarIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Youth Representative</Text>
              <Text color={'gray.600'}>Edward Clifford</Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

function Files() {
  return (
    <Box p={4} mt="10">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Meeting Minutes and Agendas</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>Copies of agendas and minutes from recent meetings.</em>
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <iframe
          title="minutes"
          src="https://drive.google.com/embeddedfolderview?id=1_GfrEX-3LVga_6ZMYmJwSQznO0mbgLQ_#grid"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </Container>
    </Box>
  )
}

function Rules() {
  return (
    <Box p={4} mt="10">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Rules and Register</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>Downloadable class register, rules, procedures, and forms</em>
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay
                  target="_blank"
                  href="/norfolk-punt-rules-0.3.3.pdf"
                >
                  <Text fontWeight={600}>Norfolk Punt Rules</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>
                  Full Norfolk Punt Class Rules, v0.3.3
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay target="_blank" href="/norfolk-punt-register.csv">
                  <Text fontWeight={600}>Norfolk Punt Class Register</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>
                  A spreadsheet of the class register, with ownership and
                  handicap details
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay
                  target="_blank"
                  href="/norfolk-punt-sail-insignia.svg"
                >
                  <Text fontWeight={600}>Sail Insignia</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>
                  Sail Insignia selected at AGM 2019
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay
                  target="_blank"
                  href="/norfolk-punt-sail-insignia-suffix.xlsx"
                >
                  <Text fontWeight={600}>Sail Insignia Suffixes</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>
                  Sail insignia suffixes to indicate handicaps in massed
                  handicap fleet events
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay
                  target="_blank"
                  href="/norfolk-punt-sail-measurement-form.xlsx"
                >
                  <Text fontWeight={600}>Sail Measurement Form</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>
                  Excel Spreadsheet for sail measurements
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay
                  target="_blank"
                  href="/norfolk-punt-hull-measurement-form.xlsx"
                >
                  <Text fontWeight={600}>Hull Measurement Form</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>
                  Excel spreadsheet for hull measurements
                </Text>
              </VStack>
            </HStack>
          </LinkBox>
          <LinkBox>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={DownloadIcon} />
              </Box>
              <VStack align={'start'}>
                <LinkOverlay
                  target="_blank"
                  href="/norfolk-punt-owners-association-rules-procedures.pdf"
                >
                  <Text fontWeight={600}>Procedures</Text>
                </LinkOverlay>
                <Text color={'gray.600'}>The procedures of the NPOA</Text>
              </VStack>
            </HStack>
          </LinkBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

function Travellers() {
  return (
    <Box p={4} mt="10">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'left'}>
        <Heading fontSize={'3xl'} textAlign={'center'}>
          Travellers Series
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>
            The Flight Trophy is awarded annually at the AGM in accordance with
            the Travellers Series rules in force for that year.
          </em>
        </Text>
        <Text color={'gray.600'} fontSize={'l'}>
          Entries should be submitted to the Association Secretary no later than
          48 hours before the AGM
        </Text>

        <Text color={'gray.600'} fontSize={'l'}>
          An entry consists of three events which meet the following conditions:
        </Text>
        <OrderedList color={'gray.600'}>
          <ListItem>
            The events must be considered &quot;Open&quot; events
          </ListItem>
          <ListItem>
            The event must have been raced by two or more punts
          </ListItem>
          <ListItem>
            The boat and helm must be consistent across the three events
          </ListItem>
          <ListItem>
            No two events submitted may be hosted by the same organisation
          </ListItem>
          <ListItem>
            It must be possible for the Secretary to verify the results to their
            satisfaction
          </ListItem>
        </OrderedList>
        <Text color={'gray.600'} fontSize={'l'}>
          The points value of each event submitted will be the position of the
          boat within the ranking of Norfolk Punts competing in the event.
        </Text>
        <Text color={'gray.600'} fontSize={'l'}>
          The HTC may refuse to accept an event as eligible at their discretion,
          but must give helms affected by such a decision an explanation, and
          time and opportunity to submit another qualifying event. The
          Travellers Series is intended to encourage boats to travel and race at
          alternative venues. This objective will guide the HTC when questions
          arise.
        </Text>
        <Text color={'gray.600'} fontSize={'l'}>
          A tie on points will be resolved in favor of the boat whose combined
          entries have the highest number of total competing Norfolk Punts.
        </Text>
      </Stack>
    </Box>
  )
}

function PuntClub() {
  return (
    <Box p={4} mt="10">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>
          Relationship to the Norfolk Punt Club
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <em>
            The <strong>Norfolk Punt Owners Association</strong> and the{' '}
            <strong>Norfolk Punt Club</strong> are closely related. Portions of
            the <strong>Norfolk Punt Club</strong> constitution which refer to
            the association are set out below.
          </em>
        </Text>
      </Stack>

      <Container maxW={'3xl'} mt={10} bg={'gray.100'} p={5} rounded={'md'}>
        <Heading fontSize={'2xl'}>
          SECTION 9 - PUNT OWNER&apos;S ASSOCIATION
        </Heading>
        <OrderedList start="65">
          <ListItem>
            <Heading fontSize={'xl'}>
              Punt Owners&apos; Association Committee
            </Heading>
            <p>
              a)The Punt Owners&apos; Association Committee (POA) shall be
              deemed to be a sub committee of the Club and its purpose shall be
              to encourage and control the building, sailing, racing and
              development of the Norfolk Punt in close cooperation with the Club
              and to represent Punt Owners whether or not they are members of
              the Club.
            </p>
            <p>
              b)The Punt Owners&apos; Association (POA) shall have its own Rules
              and Procedures (POA Rules) so far as these do not conflict with
              the Rules or constitution of the Club. A copy of any such NPOA
              Rules must be provided to the Honorary Secretary of the Club who
              shall be notified forthwith of any change in the NPOA Rules.
              (included as Annex A below)
            </p>
          </ListItem>
          <ListItem>
            <Heading fontSize={'xl'}>Punt Owner</Heading>
            <p>
              A Punt Owner is defined as any person owning or part owning a
              Norfolk Punt (hereinafter called a Punt) recognised to be a boat
              within the class of Norfolk Punts as defined by the POA Rules
            </p>
          </ListItem>
          <ListItem>
            <Heading fontSize={'xl'}>POA Committee</Heading>
            <p>
              The POA committee shall consist of the POA Chair, the POA
              Secretary (who during the period of tenure shall be an ex officio
              member of the Club Committee) and a Member of the NPC Committee
              (who shall be a Punt Owner) nominated by the NPC Committee. These
              persons together shall be known as the POA Committee and shall
              take office from 1st January next following for one year.
            </p>
          </ListItem>
          <ListItem>
            <Heading fontSize={'xl'}>Membership</Heading>
            <p>
              Any members of the POA Committee or any sub committee thereto who
              are not Full Members or adult Family Members of the Club shall for
              so long as they shall serve on the POA Committee become Temporary
              Members of the Club. The granting of Temporary Membership to any
              member of the POA Committee shall not oblige such member to pay
              any Entrance fee or annual subscription but such Temporary members
              shall not be entitled to exercise any of the rights and privileges
              of Club membership and for the avoidance of doubt they shall have
              no voting rights in Club meetings.
            </p>
          </ListItem>
          <ListItem>
            <Heading fontSize={'xl'}>Meetings.</Heading>
            <p>
              The Punt Owners Association Secretary, or, if none, the NPC
              Honorary Secretary, shall convene Meetings of Punt Owners (POA
              meetings) by giving not less than fourteen days notice to each
              Punt Owner on the Owners&apos; register, and shall convene a POA
              Annual General Meeting and any Special General POA Meetings in the
              same manner as provided by Section 6 of the Club Constitution
              relating to the Annual General Meeting or any Special General
              Meetings of the Club, (so far as relevant) except that a
              requisition need be made and signed by five Punt Owners only. All
              Punts Owners whether or not Club Members shall be entitled to
              attend the POA Annual General Meeting and any Special General POA
              Meetings. The election, retirement and continuation of membership
              of the POA Committee shall be in accordance with provisions of
              Section 4 of the Club Constitution (so far as relevant) and the
              voting and procedures to be followed at such meetings shall be in
              accordance with the Club provisions therein save that at POA
              meetings ten owners shall form a quorum.
            </p>
          </ListItem>
          <ListItem>
            <Heading fontSize={'xl'}>
              Handicap and Technical Sub Committee
            </Heading>
            <p>
              a)A Handicap and Technical Sub Committee (HTC) shall be formed at
              the direction of the POA Committee to examine Punt handicaps,
              changes to boat or sail measurements and any technical issues that
              might affect the Punt Class. This shall be a sub committee of the
              POA and shall meet in accordance with the Rules of the POA and
              shall report back to the POA Committee.
            </p>
            <p>
              b)The Punt Owners&apos; Association Secretary shall report to the
              Club Committee on any matters resolved by the POA and any
              subcommittees thereto.
            </p>
            <p>
              This Constitution is based on the model constitution produced by
              the RYA (20 January 2012) but has been amended to meet the
              specific requirements of the Norfolk Punt Club.
            </p>
          </ListItem>
        </OrderedList>
      </Container>
    </Box>
  )
}

const Technicalities = () => (
  <>
    <Committee />
    <Container maxW={'6xl'}>
      <Divider />
    </Container>
    <Rules />
    <Container maxW={'6xl'}>
      <Divider />
    </Container>
    <Travellers />
    <Container maxW={'6xl'}>
      <Divider />
    </Container>
    <PuntClub />
    <Container maxW={'6xl'}>
      <Divider />
    </Container>
    <Files />
  </>
)

Technicalities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Technicalities
