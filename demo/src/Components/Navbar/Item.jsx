import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Item = ({ children, className }) => (
  <li className={classNames('c-navbar__item', className)}>
    {children}
  </li>
)

Item.propTypes = {
  children: T.node.isRequired,
  className: T.string,
}

export default Item