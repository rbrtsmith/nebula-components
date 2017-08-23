import React, { Component } from 'react'

import Buttons from './Components/Buttons'
import Typography from './Components/Typography'
import FormElements from './Components/FormElements'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import StatusCards from './Components/Cards/StatusCards'
import Flyouts from './Components/Flyouts'
import Tabs from './Components/Tabs'
import ModalExample from './Components/Modal/Example'
import OpenModal from './Components/Modal/Open'
import Pills from './Components/Pills'
import SiteContent from './Components/SiteContent'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isModalOpen: false,
    }
  }

  closeModal = () => {
    document.body.style.overflow = 'visible'
    this.setState({
      isModalOpen: false,
    })
  }

  openModal = () => {
    document.body.style.overflow = 'hidden'
    this.setState({
      isModalOpen: true,
    })
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <ModalExample isOpen={isModalOpen} close={this.closeModal} open={this.openModal} />
        <Navbar />
        <section id="main-content">
          <SiteContent />
          <div className="o-site-wrap o-site-wrap--padding">
            <h1>Nebula Components</h1>
          </div>
          <Typography />
          <Buttons />
          <FormElements />
          <Cards />
          <StatusCards />
          <Flyouts />
          <OpenModal open={this.openModal} />
          <Tabs />
          <Pills />
        </section>
      </div>
    )
  }
}

export default App
