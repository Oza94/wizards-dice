import React from 'react'
import { PageContainer } from '../../atoms'

function Page({ title, description, children }) {
  return (
    <PageContainer>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {children}
    </PageContainer>
  )
}

export default Page
