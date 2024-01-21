import ScrollToTop from 'react-scroll-up';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingStatus } from './../../redux/authSelectors';
import { Container, SubHeader, BlockWrapper } from './Contacts.styled';
import Arrow from '../../images/arrowUp.png';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';


export const Contacts = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {loader && <Loader />}
      <BlockWrapper>
        <SubHeader>Add new contact</SubHeader>
        <ContactForm />
      </BlockWrapper>
      <BlockWrapper>
        <SubHeader>Your contacts</SubHeader>
        <Filter />
        <ContactList />
      </BlockWrapper>
      <ScrollToTop
        showUnder={160}
        style={{
          bottom: 40,
          right: 40,
        }}
      >
        <img alt="arrow up" width="35" srcSet={Arrow} />
      </ScrollToTop>
    </Container>
  );
};
export default Contacts;
