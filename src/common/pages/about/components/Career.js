import React from 'react'
import { Table, Row, Cell } from 'avrs-ui/src/table'

const Career = () => (
  <Table>
    <colgroup>
      <col style={{ width: '60%' }} />
      <col style={{ width: '12%' }} />
      <col style={{ width: '28%' }} />
    </colgroup>
    <Row>
      <Cell hideRightBorder>
        Позиция
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        %
      </Cell>
      <Cell>
        Сумма покупки
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        AVERSIS PLATINUM
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        20%
      </Cell>
      <Cell>
        € 250 000
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        AVERSIS GOLD
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        18 %
      </Cell>
      <Cell>
        € 120 000
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        AVERSIS MANAGER
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        16 %
      </Cell>
      <Cell>
        € 60 000
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        AVERSIS SELLER
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        13%
      </Cell>
      <Cell>
        € 20 000
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        AVERSIS AGENT
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        10%
      </Cell>
      <Cell>
        € 5 000
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        AVERSIS STARTING
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        5%
      </Cell>
      <Cell>
        -
      </Cell>
    </Row>
  </Table>
)

export default Career
