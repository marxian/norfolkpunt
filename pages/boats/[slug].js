import Layout from '../../components/Layout'

import {
  getBoatBySlug,
  getBoatSlugs,
  markdownToHtml,
} from '../../content/fetchers'

import PuntDetails from '../../components/PuntDetails'
import { getPlaiceholder } from 'plaiceholder'

const Boat = ({ data, content, image }) => (
  <PuntDetails punt={data} content={content} image={image} />
)

Boat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Boat

export async function getStaticProps({ params }) {
  const { data, content: markdown = '' } = getBoatBySlug(params.slug)
  const content = await markdownToHtml(markdown)

  const image = await getPlaiceholder(
    data.coverImage || '/images/site/photograph-wanted.png'
  )

  return {
    props: {
      data,
      image,
      content,
    },
  }
}

export async function getStaticPaths() {
  const boats = getBoatSlugs()

  return {
    paths: boats.map((slug) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
