import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from './Tooltip'

const Tooltips = ({ handleClick, openTooltip }) => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Tooltips</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        {Object.keys(openTooltip).map(key => (
          <Tooltip
            isOpen={openTooltip[key]}
            id={key}
            key={key}
            handleClick={handleClick}
          />),
        )}
      </div>
    </div>
  </section>
)

Tooltips.propTypes = {
  handleClick: PropTypes.func.isRequired,
  openTooltip: PropTypes.shape({
    north: PropTypes.bool.isRequired,
    south: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Tooltips
