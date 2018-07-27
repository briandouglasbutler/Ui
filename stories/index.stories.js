import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Modal from '../packages/modal'

storiesOf('Modal', module)
  .add('isOpen false', () => (
    <div>
      Someone is using our modal:
      <Modal isOpen={false} toggleModal={() => {}} >
        <div>I'm drawn in the modal through props.children</div>
      </Modal>
    </div>
  ))
  .add('isOpen true', () => (
    <div>
      Someone is using our modal:
      <Modal isOpen={true} toggleModal={() => {}} >
        <div>I'm drawn in the modal through props.children</div>
      </Modal>
    </div>
  ));;
