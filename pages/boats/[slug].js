import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import {
  getBoatBySlug,
  getBoatSlugs,
  markdownToHtml,
} from '../../content/fetchers'

import PuntDetails from '../../components/PuntDetails'

export default function Boat({ data, content }) {
  return (
    <>
      <Nav />
      <main>
        <PuntDetails name={data.name} sailNumber={data.sailNumber} />
      </main>
      <Footer />
    </>
  )
}

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
