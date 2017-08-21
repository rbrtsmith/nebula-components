import React, { Component } from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import List from './List'
import Panels from './Panels'

class Pills extends Component {
  constructor() {
    super()

    this.state = {
      activeIndex: 0,
    }
  }

  activatePill = (activeIndex) => {
    this.setState({
      activeIndex,
    })
  }

  render() {
    const { activeIndex } = this.state
    const children = React.Children.map(this.props.children, (child) => {
      if (child.type === List) {
        return React.cloneElement(child, {
          activeIndex,
          activatePill: this.activatePill,
        })
      } else if (child.type === Panels) {
        return React.cloneElement(child, {
          activeIndex,
        })
      }

      return child
    })
    return <div className={classNames('c-pill', this.props.className)}>{children}</div>
  }
}

Pills.propTypes = {
  children: T.node,
  className: T.string,
}

export default Pills
