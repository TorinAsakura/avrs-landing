import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '395px',
    height: '386px',
    backgroundImage: 'url(./prepaid-card.png)',
    position: 'relative',
    left: '-60px',
  },
})

const PrepaidCard = () => (
  <div className={styles()} />
)

export default PrepaidCard
