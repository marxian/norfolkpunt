import React from 'react'
import { Box, Flex, Wrap, WrapItem, Link, Text } from '@chakra-ui/react'

const Story = ({ story, author }) => (
  <figure>
    <blockquote>
      <Text>{story}</Text>
    </blockquote>
    <figcaption>—{author}</figcaption>
  </figure>
)

export default Story
