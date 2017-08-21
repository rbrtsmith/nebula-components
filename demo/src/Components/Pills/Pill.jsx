import React, { createElement as E } from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Pill = (
  {
    node,
    component,
    children,
    index,
    activatePill,
    isActive,
    disabled,
    className,
    to,
    type,
    status,
    ...rest
  }) => {
  const handleClick = () => { activatePill(index) }
  const initial = 'c-pills__pill'
  const optional = 'c-pills__pill--status'
  const ComponentOverride = component
  const enhancedClassName = classNames(
    initial,
    className,
    { 'is-active': isActive },
    { [`${optional} c-pills__pill--success`]: status === 'success' },
    { [`${optional} c-pills__pill--info`]: status === 'info' },
    { [`${optional} c-pills__pill--warning`]: status === 'warning' },
    { [`${optional} c-pills__pill--error`]: status === 'error' },
  )

  if (ComponentOverride) {
    return (
      <ComponentOverride
        to={to}
        className={enhancedClassName}
        {...rest}
      >
        {children}
      </ComponentOverride>
    )
  }

  return (
    E(
      type === 'link' ? 'a' : (node || 'button'),
      {
        type,
        disabled,
        onClick: handleClick,
        className: enhancedClassName,
        ...rest,
      },
      children,
    )
  )
}

Pill.propTypes = {
  node: T.string,
  children: T.node,
  index: T.number,
  activatePill: T.func,
  isActive: T.bool,
  disabled: T.bool,
  className: T.string,
  to: T.string,
  type: T.oneOf(['submit', 'reset', 'menu', 'link']),
  status: T.oneOf([
    'success',
    'info',
    'warning',
    'error',
  ]),
  component: T.oneOfType([
    T.func,
    T.node,
  ]),
}

export default Pill
