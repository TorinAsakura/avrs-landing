import React from 'react'
import { Table, Row, Cell } from 'avrs-ui/src/table'

const Requirements = () => (
  <Table>
    <colgroup>
      <col style={{ width: '40%' }} />
      <col style={{ width: '20%' }} />
      <col style={{ width: '20%' }} />
      <col style={{ width: '20%' }} />
    </colgroup>
    <Row>
      <Cell hideRightBorder>
        Тариф
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        Аренда в сутки
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        Загрузка CPU
      </Cell>
      <Cell hideLeftBorder>
        Загрузка RAM
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        Базис
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        10
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        5 %
      </Cell>
      <Cell hideLeftBorder>
        1 Gb
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        Стандарт
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        12
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        15%
      </Cell>
      <Cell hideLeftBorder>
        2 Gb
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        Премиум
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        15
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        20 %
      </Cell>
      <Cell hideLeftBorder>
        3 Gb
      </Cell>
    </Row>
    <Row>
      <Cell hideRightBorder>
        Бизнес
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        20
      </Cell>
      <Cell
        hideLeftBorder
        hideRightBorder
      >
        40 %
      </Cell>
      <Cell hideLeftBorder>
        4 GB
      </Cell>
    </Row>
  </Table>
)

export default Requirements
