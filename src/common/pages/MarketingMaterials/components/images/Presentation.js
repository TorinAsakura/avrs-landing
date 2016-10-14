import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '205px',
    height: '150px',
    backgroundImage: 'url(./presentation_placeholder.png)',
  },
})

const Presentation = () => (
  <div className={styles()} />
)

export default Presentation
