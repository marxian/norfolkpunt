import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import { getBoats } from '../../content/fetchers'
import PuntCard from '../../components/PuntCard'

const Index = ({ punts }) => {
  //sort punts by number descending
  let boats = Object.values(punts).sort(
    (a, b) => b.data.sailNumber - a.data.sailNumber
  )

  return (
    <>
      <Nav />
      <main>
        <div className="cf ma2-l">
          {boats.map(({ data, slug }) => (
            <div className="fl w-100 w-third-m w-25-l pa2" key={slug}>
              <PuntCard punt={data} slug={slug} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Index

export async function getStaticProps({ params }) {
  const punts = getBoats()

  return {
    props: {
      punts,
    },
  }
}
