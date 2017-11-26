import gql from 'graphql-tag'
import * as actions from '../constants'

export function load() {
  return async (dispatch, getState, client) => {
    const { data } = await client.query({
      query: gql`
        query {
          servicePlans {
            type
            period
            time
            price
            profitabilityPerDay
            profitabilityPerHour
            amount
            memory
            cpu
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      servicePlans: data.servicePlans,
    })
  }
}

export function select(plan, period) {
  return {
    type: actions.select,
    plan,
    period,
  }
}

export function changePlan(plan) {
  return {
    type: actions.changePlan,
    plan,
  }
}

export function changePeriod(period) {
  return {
    type: actions.changePeriod,
    period,
  }
}

export function changeTime(time) {
  return {
    type: actions.changeTime,
    time,
  }
}

export function changeCPU(cpu) {
  return {
    type: actions.changeCPU,
    cpu,
  }
}

export function changeMemory(memory) {
  return {
    type: actions.changeMemory,
    memory,
  }
}
