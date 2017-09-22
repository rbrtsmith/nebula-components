import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Tooltip = ({ isOpen, id, handleClick }) => (
  <div className="o-grid__item u-1/4@sm">
    <div className={classNames('c-tooltip', { 'is-open': isOpen })}>
      <button className="c-tooltip__toggle" onClick={() => { handleClick(id) }}>toggle me: {id}</button>
      <div className={`c-tooltip__content c-tooltip__content--${id.toLowerCase()}`}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aspernatur culpa ex explicabo.
        </div>
      </div>
    </div>
  </div>
)

Tooltip.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Tooltip
