import React from 'react'
import { Condition } from 'avrs-ui/src/condition'
import { Modal } from 'avrs-ui/src/modal'
import YouTube from 'react-youtube'

const Modals = ({ modal, onClose }) => (
  <div>
    <Condition match={modal === 'video'}>
      <Modal onClose={onClose}>
        <YouTube
          videoId='m8QDk9atStQ'
          opts={{
            height: '500',
            width: '900',
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

export default Modals
