import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '205px',
    height: '150px',
    backgroundImage: 'url(./brandbook_materials_placeholder.png)',
  },
})

const BrandbookMaterials = () => (
  <div className={styles()} />
)

export default BrandbookMaterials
