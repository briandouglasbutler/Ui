import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Content } from './styles'
const { bool, func } = PropTypes

class ModalEntry extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    toggleModal: func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      respectMouse: true,
    }
  }

  toggleMouse = () => {
    this.setState({ respectMouse: !this.state.respectMouse });
  };

  toggleModal = () => {
    if (this.state.respectMouse) {
      this.props.toggleModal();
    }
  };

  render(){
    const { isOpen } = this.props;
    if (!isOpen) return null;

      //HEADER TYPE AND BODY TYPE FO JS STYLES

    return (
      <Container onClick={this.toggleModal}>
        <Content onMouseEnter={this.toggleMouse} onMouseLeave={this.toggleMouse}>
        {this.props.children.map(child => {
          if (child.type !== 'button') return child;

          return (
            <div onClick={this.toggleModal} onMouseEnter={this.toggleMouse} onMouseLeave={this.toggleMouse}>
              {child}
            </div>
          );
        })}
        </Content>
      </Container>
    );
  }
}

export default ModalEntry;
