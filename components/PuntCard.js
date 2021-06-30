import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import wanted from '../images/photograph-wanted.png'

const PuntCard = ({ punt, className, slug }) => {
  let coverImage
  if (punt.coverImage) {
    coverImage = require(`../images/${punt.coverImage}`)
  }
  return (
    <div className={`${className} bg-black-90 white tc grow`}>
      <Link href={`/punts/${slug}`}>
        <a className="db link dim tc">
          {coverImage ? (
            <Image src={coverImage} placeholder="blur" alt={punt.name} />
          ) : (
            <Image src={wanted} alt="" />
          )}
          <span className="db f4 b pt1">{punt.name}</span>
          <span className="db f5 light-gray b pb1">{punt.sailNumber}</span>
        </a>
      </Link>
    </div>
  )
}

export default PuntCard
