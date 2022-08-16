import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from './ModalContext';
import Modal from '../../components/common/Modal';
import ReactDOM from 'react-dom';

const propTypes = {
  children: PropTypes.node.isRequired,
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState(null);

  const openModal = (config) => {
    setModalConfig(config);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const valueModal = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModal}>
      {children}
      {isOpen &&
        ReactDOM.createPortal(
          <React.Fragment>
            <Modal
              modalType={modalConfig.modalType}
              payload={modalConfig.payload}
            />
          </React.Fragment>,
          document.body
        )}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = propTypes;
