import React, { useState } from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { getPlaiceholder } from 'plaiceholder'
import Lightbox from 'react-image-lightbox'

import Image from '../../components/Image'
import Layout from '../../components/Layout'
import { getPage } from '../../content/fetchers'

const Pictures = ({ pictures }) => {
  let [isOpen, setOpen] = useState(false)
  let [photoIndex, setPhotoIndex] = useState(0)

  return (
    <>
      <Box
        padding={4}
        w="100%"
        maxW="1200px"
        mx="auto"
        sx={{ columnCount: [1, 2, 3, 4], columnGap: '8px' }}
      >
        {pictures.map((pic, i) => (
          <Link
            href={pic.img.src}
            key={`${pic.url}${i}`}
            onClick={(e) => {
              e.preventDefault()
              setPhotoIndex(pictures.indexOf(pic))
              setOpen(true)
            }}
          >
            <Image
              {...pic.img}
              blurDataURL={pic.base64}
              alt={pic.caption || ''}
              placeholder="blur"
              borderRadius="xl"
            />
          </Link>
        ))}
      </Box>
      {isOpen && (
        <Lightbox
          mainSrc={pictures[photoIndex]?.img.src}
          nextSrc={pictures[(photoIndex + 1) % pictures.length]?.img.src}
          prevSrc={
            pictures[(photoIndex + pictures.length - 1) % pictures.length]?.img
              .src
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

export async function getStaticProps({ params }) {
  const page = getPage('pictures')

  const pictures = []
  for (const pic of page.data.pictures) {
    let image = await getPlaiceholder(pic)
    pictures.push(image)
  }

  return {
    props: {
      pictures,
    },
  }
}

Pictures.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Pictures
