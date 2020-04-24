import React, { useState, useEffect } from 'react'
import styles from './Loader.css'
import { bem } from '../../../helpers/bem'

function Loader({ appear = 500 }) {
  const [visible, setVisible] = useState(false)

  // Makes the loader appear after a short delay so it does not
  // flash on the screen if there's a quick mount / unmount
  useEffect(() => {
    const timeoutId = setTimeout(() => setVisible(true), appear)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className={styles.Loader__wrapper}>
      <div className={bem(styles, 'Loader', { visible })}>
        {/* used for animation */}
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
