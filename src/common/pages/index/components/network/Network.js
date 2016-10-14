import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
    background: 'linear-gradient(135deg, #1C5D98 0%,#1C7DB9 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundImage: 'url(./network.png)',
  },
})

const Network = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Network
