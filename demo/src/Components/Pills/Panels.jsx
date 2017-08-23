import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Panels = ({ activeIndex, children, className }) => {
  const child = children[activeIndex] || null

  return (
    <div className={classNames('c-pills__panels', className)}>
      { child }
    </div>
  )
}

Panels.propTypes = {
  className: T.string,
  children: T.node.isRequired,
  activeIndex: T.number,
}

export default Panels
