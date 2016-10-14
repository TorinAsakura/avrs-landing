import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '205px',
    height: '150px',
    backgroundImage: 'url(./brandbook_placeholder.png)',
  },
})

const Brandbook = () => (
  <div className={styles()} />
)

export default Brandbook
