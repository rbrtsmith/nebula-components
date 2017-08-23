import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const List = ({ children, activatePill, activeIndex, className }) => {
  const enhancedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      index,
      activatePill,
      isActive: index === activeIndex,
    }))
  return (
    <div className="c-pills__list-wrapper">
      <div className={classNames('c-pills__list', className)}>
        {enhancedChildren}
      </div>
    </div>
  )
}

List.propTypes = {
  className: T.string,
  children: T.node.isRequired,
  activatePill: T.func,
  activeIndex: T.number,
}

export default List
