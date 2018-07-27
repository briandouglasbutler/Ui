import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../packages/modal'

class TestWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal:false,
    }
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
};

SubmitForm = () => {
  console.log('here I am');
};

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
        Show me!
        </button>

        <div>
          <Modal isOpen={showModal} toggleModal={this.toggleModal}>
            <div>I'm the header inside the modal</div>
            <div>I'm the body of the modal</div>
            <button type="button" onClick={this.SubmitForm}>
            YES!
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}

storiesOf('Simple Modal' , module).add('hidden with display: none', () => <TestWrapper />);