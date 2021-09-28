import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import Image from 'next/image'

import { getPage } from '../../content/fetchers'

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

const Pictures = ({ pictures }) => {
  let [isOpen, setOpen] = useState(false)
  let [photoIndex, setPhotoIndex] = useState(0)
  const cs = Math.round(pictures.length / 3)
  const chunks = chunk(pictures, cs)

  return (
    <>
      <div className="cf">
        <div className="fl w-50 w-third-ns">
          {chunks[0].map((img) => (
            <a
              href={img}
              className="db w-100"
              key={img}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(pictures.indexOf(img))
                setOpen(true)
              }}
            >
              <Image src={img} width="200" height="200" />
            </a>
          ))}
        </div>
        <div className="fl w-50 w-third-ns">
          {chunks[1].map((img) => (
            <a
              href={img}
              className="db w-100"
              key={img}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(pictures.indexOf(img))
                setOpen(true)
              }}
            >
              <Image src={img} width="200" height="200" />
            </a>
          ))}
        </div>
        <div className="fl w-50 w-third-ns">
          {chunks[2].map((img) => (
            <a
              href={img}
              className="db w-100"
              key={img}
              onClick={(e) => {
                e.preventDefault()
                setPhotoIndex(pictures.indexOf(img))
                setOpen(true)
              }}
            >
              <Image src={img} width="200" height="200" />
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={pictures[photoIndex]}
          nextSrc={pictures[(photoIndex + 1) % pictures.length]}
          prevSrc={
            pictures[(photoIndex + pictures.length - 1) % pictures.length]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + pictures.length - 1) % pictures.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % pictures.length)
          }
        />
      )}
    </>
  )
}

export default Pictures

export async function getStaticProps({ params }) {
  const page = getPage('pictures')

  const pictures = page.data.pictures

  return {
    props: {
      pictures,
    },
  }
}
