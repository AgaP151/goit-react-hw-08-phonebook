import { useState } from 'react';
import { FaUserCheck } from 'react-icons/fa';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import {
  AvatarWrapper,
  InputWrapper,
  Input,
  Label,
  ListItem,
  ListItemForm,
  ContentWrapper,
} from './ModalForm.styled';
import Avatar from '../../images/girl.gif';
import { Btn } from 'components/Btn/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contactsOperations';
import { getContactsItems } from 'redux/contactsSelectors';
import { notifySettings } from 'utils/notifySettings';

export const ModalForm = ({ id, closeModal }) => {
  const contacts = useSelector(getContactsItems);
  const currentContact = contacts.find(contact => contact.id === id);

  const dispatch = useDispatch();

  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const includesName = contacts.find(
      contact => contact.name === name && contact.number === number
    );

    if (includesName) {
      return Notiflix.Notify.warning('No data changed', notifySettings);
    }
    dispatch(updateContact({ id, name, number }));
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <ListItem>
      <ContentWrapper>
        <AvatarWrapper>
          <img src={Avatar} alt="avatar" />
        </AvatarWrapper>
        <ListItemForm onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>
              Change name:
              <Input
                onChange={onInputChange}
                value={name}
                name="name"
                placeholder="Enter contact`s name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
            </Label>
            <Label>
              Change phone:
              <Input
                onChange={onInputChange}
                value={number}
                type="tel"
                name="number"
                placeholder="Enter contact`s number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
            </Label>
          </InputWrapper>
          <Btn
            icon={FaUserCheck}
            type="submit"
            status="update"
            text="Update contact"
          />
        </ListItemForm>
      </ContentWrapper>
    </ListItem>
  );
};

ModalForm.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
