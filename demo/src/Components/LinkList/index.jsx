import React from 'react'

import List from './List'
import Item from './Item'
import Link from './Link'
import Group from './Group'

const LinkList = () => (
  <div>
    <div className="c-card u-hard u-push-bottom-md">
      <List>
        <Item>
          <Group divider>
            <Item>
              <Link to="/">Item 1</Link>
            </Item>
            <Item>
              <Link to="/">Item 1</Link>
            </Item>
            <Item>
              <Link to="/">Item 1</Link>
            </Item>
          </Group>
        </Item>
        <Item>
          <Group>
            <Item>
              <Link to="/">Item 1</Link>
            </Item>
            <Item>
              <Link to="/">Item 1</Link>
            </Item>
          </Group>
        </Item>
      </List>
    </div>
    <div className="c-card u-hard">
      <List>
        <Item>
          <Link to="/">Item 1</Link>
        </Item>
        <Item>
          <Link to="/">Item 1</Link>
        </Item>
        <Item>
          <Link to="/">Item 1</Link>
        </Item>
      </List>
    </div>
  </div>
)

export default LinkList
