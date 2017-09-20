import React from 'react'

const ProgressBar = () => (
  <div>
    <section className="o-section-md">
      <div className="c-progress-bar">
        <div className="c-progress-bar__indicator c-progress-bar__indicator--current" />
      </div>
    </section>
    <section className="o-section-md">
      <div className="c-progress-bar">
        <div className="c-progress-bar__indicator c-progress-bar__indicator--success" />
      </div>
    </section>
    <section className="o-section-md">
      <div className="c-progress-bar">
        <div className="c-progress-bar__indicator c-progress-bar__indicator--error" />
      </div>
    </section>
  </div>
)

export default ProgressBar
