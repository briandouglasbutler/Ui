import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'
const { bool, func } = PropTypes

class ModalEntry extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    toggleModal: func.isRequired
  }

  render(){
    const { isOpen, toggleModal } = this.props

    if (!isOpen)
     return null

    return (
      <Container onClick={toggleModal}>
        {this.props.children}
      </Container>
    )
  }
}

export default ModalEntry
