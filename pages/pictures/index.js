import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import Image from 'next/image'

import { getPage } from '../../content/fetchers'

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

const Pictures = (images) => {
  let [isOpen, setOpen] = useState(false)
  let [photoIndex, setPhotoIndex] = useState(0)
  const cs = Math.round(images.length / 3)
  const chunks = chunk(images, cs)

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
                setPhotoIndex(images.indexOf(img))
                setOpen(true)
              }}
            >
              <Image src={img} />
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
                setPhotoIndex(images.indexOf(img))
                setOpen(true)
              }}
            >
              <Image src={img} />
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
                setPhotoIndex(images.indexOf(img))
                setOpen(true)
              }}
            >
              <Image src={img} />
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  )
}

export default Pictures

export async function getStaticProps({ params }) {
  const page = getPage('pictures')
  console.log(page)

  const images = page.data.pictures.map((p) => require(`../../${p}`))

  return {
    props: {
      images,
    },
  }
}
