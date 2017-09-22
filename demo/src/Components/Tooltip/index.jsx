import React, { Component } from 'react'

import Tooltips from './Tooltips'

class TooltipsContainer extends Component {
  constructor() {
    super()
    this.state = {
      openTooltip: {
        north: false,
        south: false,
      },
    }
  }

  handleClick = (direction) => {
    const newState = Object.keys(this.state.openTooltip).reduce((acc, curr) => {
      acc[curr] = false
      return acc
    }, {})
    this.setState({
      openTooltip: {
        ...newState,
        [direction]: !this.state.openTooltip[direction],
      },
    })
  }

  render() {
    const { openTooltip } = this.state
    return <Tooltips handleClick={this.handleClick} openTooltip={openTooltip} />
  }
}

export default TooltipsContainer

