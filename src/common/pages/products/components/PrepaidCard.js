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
  small: {
    width: '197px',
    height: '192px',
    backgroundSize: 'cover',
    left: '-20px',
  },
})

const PrepaidCard = ({ small }) => (
  <div className={styles({ small })} />
)

export default PrepaidCard
