import React, { Component } from 'react'
import scrollIntoView from 'scroll-into-view'
import { StyleSheet } from 'elementum'
import { Link } from 'avrs-ui/src/link'
import { Layer } from 'avrs-ui/src/layer'
import { Text, Space } from 'avrs-ui/src/text'

const styles = StyleSheet.create({
  self: {
    '& div': {
      display: 'block !important',
    },
  },
})

class ScrollToTop extends Component {
  onClick = () => {
    if (this.element && this.element.parentNode) {
      scrollIntoView(this.element.parentNode.parentNode, {
        time: 500,
        align: {
          top: 0.1,
        },
      })
    }
  }

  onSetRef = (element) => {
    this.element = element
  }

  render() {
    return (
      <div
        ref={this.onSetRef}
        style={{ width: '100%' }}
      >
        <Layer
          align='mc-mc'
          constraints={[{
            to: 'window',
            attachment: 'none',
            pin: ['top'],
          }]}
          classes={{
            pinned: styles(),
          }}
        >
          <div style={{ display: 'none', marginTop: 60, paddingRight: 40, paddingBottom: 20 }}>
            <Text color='blue400'>
              &#8593;
            </Text>
            <Space />
            <Link onClick={this.onClick}>
              <Text color='blue400'>
                Наверх
              </Text>
            </Link>
          </div>
        </Layer>
      </div>
    )
  }
}

export default ScrollToTop
