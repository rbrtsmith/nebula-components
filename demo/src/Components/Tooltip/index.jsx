import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ direction }) => (
  <div className="o-grid__item u-1/4@sm">
    <div role="tooltip" className="c-tooltip">
      <span className="c-tooltip__trigger">Hover over me</span>
      <div className={`c-tooltip__content c-tooltip__content--${direction}`}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </div>
    </div>
  </div>
)

Tooltip.propTypes = {
  direction: PropTypes.string,
}

export default Tooltip
