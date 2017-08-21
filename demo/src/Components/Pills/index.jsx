import React from 'react'

import List from './List'
import Pills from './Pills'
import Pill from './Pill'
import Panels from './Panels'
import Panel from './Panel'

const animals = [
  {
    name: 'Pill 1',
    description: 'Pill 1 content',
  },
  {
    name: 'Pill 2',
    description: 'Pill 2 content',
    disabled: true,
  },
  {
    name: 'Pill 3',
    description: 'Pill 3 content',
    isActive: true,
  },
  {
    name: 'Pill 4',
    description: 'Pill 4 content',
    status: 'success',
  },
  {
    name: 'Pill 5',
    description: 'Pill 5 content',
    status: 'info',
  },
  {
    name: 'Pill 6',
    description: 'Pill 6 content',
    status: 'warning',
  },
  {
    name: 'Pill 7',
    description: 'Pill 7 content',
    status: 'error',
  },
]

const MyPills = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Pills</h4>
      <Pills>
        <List>
          {animals.map(({ disabled, name, status }) =>
            <Pill key={name} disabled={disabled} status={status}>{name}</Pill>)}
        </List>
        <Panels>
          {animals.map(({ disabled, description }) => (
            <Panel
              className="c-card"
              key={description}
              disabled={disabled}
            >
              {description}
            </Panel>
          ))}
        </Panels>
      </Pills>
    </div>
  </section>
)

export default MyPills
