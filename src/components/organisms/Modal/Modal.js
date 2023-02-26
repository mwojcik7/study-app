import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from './Modal.styles';
import { Button } from 'components/atoms/Button/Button.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
