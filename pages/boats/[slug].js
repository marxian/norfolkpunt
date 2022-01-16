import Layout from '../../components/Layout'

import {
  getBoatBySlug,
  getBoatSlugs,
  markdownToHtml,
} from '../../content/fetchers'

import PuntDetails from '../../components/PuntDetails'

const Boat = ({ data, content }) => (
  <PuntDetails punt={data} content={content} />
)

Boat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Boat

export async function getStaticProps({ params }) {
  const { data, content: markdown = '' } = getBoatBySlug(params.slug)
  const content = await markdownToHtml(markdown)
  return {
    props: {
      data,
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
