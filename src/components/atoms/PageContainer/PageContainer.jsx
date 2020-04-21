import React from 'react'
import styles from './PageContainer.css'

function PageContainer({ children }) {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.PageContainer__inner}>{children}</div>
    </div>
  )
}

export default PageContainer
