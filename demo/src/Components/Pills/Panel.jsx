import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Panel = ({ children, className }) =>
  <div className={classNames('c-pills__panel', className)}>{children}</div>

Panel.propTypes = {
  className: T.string,
  children: T.node.isRequired,
}

export default Panel
