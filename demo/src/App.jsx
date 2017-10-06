import React from 'react'

import Typography from './Components/Typography'
import Tooltip from './Components/Tooltip'
import SiteContent from './Components/SiteContent'
import StatusCards from './Components/Cards/StatusCards'

const App = () => (
  <div>
    <ul className="c-toast c-toast--ne">
      <li className="c-toast__item">
        <div className="c-status-card c-status-card--info">
          <div className="c-status-card__component" />
          <div className="c-status-card__body">
            Nebula is great!
          </div>
        </div>
      </li>
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
    </ul>
    <div className="c-toast c-toast--se">
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
    </div>
    <div className="c-toast c-toast--sw">
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
    </div>
    <div className="c-toast c-toast--nw">
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
      <li className="c-toast__item">
        <div className="c-card">
          Test
        </div>
      </li>
    </div>
    <section id="main-content">
      <SiteContent />
      <div className="o-site-wrap o-site-wrap--padding">
        <h1>Nebula Components</h1>
      </div>
      <Typography />
      <StatusCards />
      <div className="o-site-wrap o-site-wrap--padding">
        <div className="c-scroll" style={{ maxHeight: '100px' }}>
          <div style={{ padding: '100px 0' }}>
            Hello World
          </div>
        </div>
        <Tooltip direction="north" />
        <Tooltip direction="south" />
        <Tooltip direction="west" />
        <Tooltip direction="east" />
        <h3>Generic table</h3>
        <div className="c-table-container">
          <table className="c-table c-table--stack@max-md">
            <thead className="c-table__header">
              <tr className="c-table__row c-table__header-row ">
                <th className="c-table__header-cell">Name</th>
                <th className="c-table__header-cell">Email</th>
              </tr>
            </thead>
            <tbody className="c-table__body">
              <tr className="c-table__row">
                <td className="c-table__cell" data-label="Name">John Smith</td>
                <td className="c-table__cell" data-label="Email">
                  <a href="" className="c-table__link">john@smith.com</a>
                </td>
              </tr>
              <tr className="c-table__row">
                <td className="c-table__cell" data-label="Name">Jack Sparrow</td>
                <td className="c-table__cell" data-label="Email">
                  <a href="" className="c-table__link">jack@sparrow.com</a>
                </td>
              </tr>
              <tr className="c-table__row">
                <td className="c-table__cell" data-label="Name">John Smith</td>
                <td className="c-table__cell" data-label="Email">
                  <a href="" className="c-table__link">john.smith@sainsburys.co.uk</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Sortable Table</h2>
        <div className="c-table-container">
          <table className="c-table c-table--sorted c-table--stack@max-md">
            <thead className="c-table__header" aria-label="Sort by">
              <tr className="c-table__row c-table__header-row ">
                <th className="c-table__header-cell c-table__header-cell--sortable">
                  <button className="c-table__sort-button is-active js-sort-button">
                    <span className="c-table__sort-text" aria-label="Sort by">Name</span>
                  </button>
                </th>
                <th className="c-table__header-cell c-table__header-cell--sortable">
                  <button className="c-table__sort-button js-sort-button">
                    <span className="c-table__sort-text" aria-label="Sort by">Email</span>
                  </button>
                </th>
                <th className="c-table__header-cell">Grade</th>
              </tr>
            </thead>
            <tbody className="c-table__body">
              <tr className="c-table__row">
                <td className="c-table__cell" data-label="Name">John Smith</td>
                <td className="c-table__cell" data-label="Email">john.smith@sainsburys.co.uk</td>
                <td className="c-table__cell" data-label="Grade">C1</td>
              </tr>
              <tr className="c-table__row">
                <td className="c-table__cell">Jack Sparrow</td>
                <td className="c-table__cell">jack.sparrow@sainsburys.co.uk</td>
                <td className="c-table__cell" data-label="Grade">C1</td>
              </tr>
              <tr className="c-table__row">
                <td className="c-table__cell">John Smith</td>
                <td className="c-table__cell">john.smith@sainsburys.co.uk</td>
                <td className="c-table__cell" data-label="Grade">C1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
)
export default App
