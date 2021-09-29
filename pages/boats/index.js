import { SimpleGrid } from '@chakra-ui/layout'

import { getBoats } from '../../content/fetchers'
import PuntCard from '../../components/PuntCard'
import Layout from '../../components/Layout'

const Boats = ({ punts }) => {
  //sort punts by number descending
  let boats = Object.values(punts).sort(
    (a, b) => b.data.sailNumber - a.data.sailNumber
  )

  return (
    <SimpleGrid m="20px" columns={[1, 2, 3]} spacing="20px">
      {boats.map(({ data, slug }) => (
        <PuntCard key={slug} punt={data} slug={slug} />
      ))}
    </SimpleGrid>
  )
}

Boats.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Boats

export async function getStaticProps({ params }) {
  const punts = getBoats()

  return {
    props: {
      punts,
    },
  }
}
