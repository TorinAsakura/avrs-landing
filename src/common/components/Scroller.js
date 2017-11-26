import { Component } from 'react'
import { findDOMNode } from 'react-dom'
import scrollIntoView from 'scroll-into-view'

class Scroller extends Component {
  componentWillReceiveProps(nextProps) {
    const { native } = this.props

    const [nextFirstPart] = nextProps.pathname.split('/').filter(part => !['', 'de', 'ru'].includes(part))
    const [firstPart] = this.props.pathname.split('/').filter(part => !['', 'de', 'ru'].includes(part))

    if (nextFirstPart !== firstPart) {
      const target = findDOMNode(this).firstChild

      if (native && target.scrollIntoView) {
        target.scrollIntoView()
      } else {
        scrollIntoView(target, {
          time: 100,
        })
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default Scroller
