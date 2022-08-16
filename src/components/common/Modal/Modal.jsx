import React, { useContext } from 'react';
import { MODAL_TYPES_MAP } from '../../../helpers/modalTypes';
import { ModalMovie, ModalDelete, ModalCongratulations } from '../../modals';
import './modal.scss';
import Button from '../Button';
import { ModalContext } from '../../../contexts';
import SuccessIcon from './../../../images/succes.svg';
import PropTypes from 'prop-types';

const propTypes = {
  modalType: PropTypes.string.isRequired,
  payload: PropTypes.object,
};

const defaultProps = {
  payload: {},
};

const Modal = ({ modalType, payload }) => {
  const { closeModal } = useContext(ModalContext);

  const getDataModals = (type) => {
    switch (type) {
      case MODAL_TYPES_MAP.ADD:
        return {
          title: 'Add movie',
          class: 'modal-movie',
          component: <ModalMovie />,
        };
      case MODAL_TYPES_MAP.EDIT:
        return {
          title: 'Edit movie',
          class: 'modal-movie',
          component: <ModalMovie movie={payload} type={type} />,
        };
      case MODAL_TYPES_MAP.DELETE:
        return {
          title: 'Delete movie',
          class: 'modal-delete',
          component: <ModalDelete movieId={payload} />,
        };
      case MODAL_TYPES_MAP.CONGRATULATIONS:
        return {
          title: 'Congratulations !',
          class: 'modal-congratulations',
          component: <ModalCongratulations />,
        };
      default:
        return null;
    }
  };

  const isModalCongratulations = modalType === MODAL_TYPES_MAP.CONGRATULATIONS;

  return (
    <div className='section-modal'>
      <div
        className={`section-modal__window ${getDataModals(modalType).class}`}
      >
        {isModalCongratulations && (
          <img
            className='section-modal__window-logo'
            src={SuccessIcon}
            alt='Logo'
          />
        )}
        <h2 className='section-modal__title'>
          {getDataModals(modalType).title}
        </h2>
        <Button
          btnClass='btn-default btn-close'
          btnText={<span className='icon-close'></span>}
          click={closeModal}
        />
        {getDataModals(modalType).component}
      </div>
    </div>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
