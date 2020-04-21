import React from 'react'
import marked from 'marked'

function Markdown({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
}

export default Markdown
