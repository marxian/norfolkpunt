import React, { useState } from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { getPlaiceholder } from 'plaiceholder'
import Lightbox from 'react-image-lightbox'

import Image from '../components/Image'
import Layout from '../components/Layout'
import { getPage } from '../content/fetchers'

const Gallery = ({ images }) => {
  let [isOpen, setOpen] = useState(false)
  let [photoIndex, setPhotoIndex] = useState(0)

  return (
    <>
      <Box
        padding={4}
        w="100%"
        maxW="1200px"
        mx="auto"
        sx={{ columnCount: [1, 2, 3, 4], columnGap: '10px' }}
      >
        {images.map((pic, i) => (
          <Link
            href={pic.src}
            key={`${pic.src}${i}`}
            onClick={(e) => {
              e.preventDefault()
              setPhotoIndex(images.indexOf(pic))
              setOpen(true)
            }}
          >
            <Image
              {...pic.img}
              blurDataURL={pic.base64}
              alt={pic.caption}
              placeholder="blur"
              borderRadius="xl"
            />
          </Link>
        ))}
      </Box>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]?.src}
          nextSrc={images[(photoIndex + 1) % images.length]?.src}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length]?.src
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={<h2>&copy; {images[photoIndex]?.attribution}</h2>}
          imageTitle={<h3>{images[photoIndex]?.caption}</h3>}
        />
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = getPage('gallery')

  const images = []
  for (const pic of page.data.images) {
    let image = {
      ...pic,
      ...(await getPlaiceholder(pic.src)),
    }
    images.push(image)
  }

  return {
    props: {
      images,
    },
  }
}

Gallery.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Gallery
