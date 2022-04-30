import React from 'react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'

const Story = ({ story, author }) => (
  <figure>
    <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
      {story}
    </ReactMarkdown>
    <figcaption>—{author}</figcaption>
  </figure>
)

export default Story
