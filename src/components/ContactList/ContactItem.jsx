import PropTypes from 'prop-types';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import {
  ListItem,
  ListItemData,
  PhoneLink,
  BtnsWrapper,
  AvatarWrapper,
  DataWrapper,
} from './ContactItem.Styled';
import { Btn } from '../Btn/Btn';
import Avatar from '../../images/user-icons.gif';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
  };

  return (
    <ListItem>
      <AvatarWrapper>
        <img src={Avatar} alt={name} width="48" />
      </AvatarWrapper>
      <ListItemData>
        <DataWrapper>
          Name:<span> {name} </span>
        </DataWrapper>
        <DataWrapper>
          Phone:{' '}
          <PhoneLink href={`tel:${number}`}>
            <span>{number}</span>
          </PhoneLink>
        </DataWrapper>
      </ListItemData>
      <BtnsWrapper>
        <Btn
          icon={FaUserMinus}
          type="button"
          status="delete"
          text="Delete contact"
          onClick={() => toggleModal('delete')}
          />
        <Btn
          icon={FaUserEdit}
          type="button"
          status="edit"
          text="Edit contact"
          onClick={() => toggleModal('edit')}
        />
      </BtnsWrapper>
      {showModal && (
        <Modal
          id={id}
          closeModal={toggleModal}
          status={statusModal}
          name={name}
        />
      )}
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
