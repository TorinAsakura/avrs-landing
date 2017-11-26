import React, { Component } from 'react'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import { Condition } from 'avrs-ui/src/condition'
import { Modal } from 'avrs-ui/src/modal'
import { contentSize } from 'avrs-ui/src/content/utils'
import YouTube from 'react-youtube'

const ids = {
  en: 'oYvv2gzhp6Y',
  ru: 'WEhK8v4RytU',
  de: 'JOVR96yDdsY',
}

const Modals = ({ locale, modal, width, height, onClose }) => (
  <div>
    <Condition match={modal === 'video'}>
      <Modal onClose={onClose}>
        <YouTube
          videoId={ids[locale]}
          opts={{
            width,
            height,
            playerVars: {
              autoplay: 1,
              controls: 0,
            },
          }}
          onEnd={({ target }) => target.stopVideo()}
        />
      </Modal>
    </Condition>
  </div>
)

class SizeContainer extends Component {
  state = {
    width: 900,
    height: 500,
  }

  componentWillMount() {
    if (canUseDOM && this.props.authSize) {
      const { width, height } = contentSize(document.body)

      this.setState({ width: width - 40, height: height - 80 })
    }
  }

  render() {
    const { width, height } = this.state

    return (
      <Modals
        {...this.props}
        width={width}
        height={height}
      />
    )
  }
}

export default SizeContainer
