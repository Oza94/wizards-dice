import React from 'react'
import { bem } from '../../../helpers/bem'
import styles from './Layout.css'

const ALIGN_MAP = {
  end: 'flex-end',
  center: 'flex-center',
  start: 'flex-start',
}

function Layout({ direction = 'row', flex, children, align, gutter }) {
  const style = {
    display: 'flex',
    flexDirection: direction,
    flex,
  }

  if (align) {
    style.alignItems = ALIGN_MAP[align]
  }

  return (
    <div
      style={style}
      className={bem(styles, 'Layout', {
        'gutter-horizontal': gutter && direction === 'row',
      })}
    >
      {children}
    </div>
  )
}

export default Layout
