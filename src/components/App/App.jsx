import { useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import ListContacts from '../ListContacts';
// import SearchContact from '../SerchContact/SearchContact';
// import ContactForm from '../ContactForm';
// import { fetchContacts } from 'redux/ContactsSlice/operation';
// import { Wrapper, TitleText } from './App.style';
import { AppBar } from 'components/AppBar/AppBar';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { fetchCurrentUser } from 'redux/Auth/operation';
// import { getIsLoading, getError } from 'redux/selectors';
// import { AnimateBack } from 'components/AnimateBack/AnimateBack';

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Wrapper>
        <TitleText>Phonebook</TitleText>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchContact />
        <ListContacts />

        <Toaster />
      </Wrapper> */}
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts,
//     filter: '',
//   };

//   componentDidMount() {
//     const contact = localStorage.getItem('contacts');
//     const parseContact = JSON.parse(contact);

//     if (parseContact) {
//       this.setState({
//         contacts: parseContact,
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSubmit = data => {
//     const { name, number } = data;
//     const { contacts } = this.state;

//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     for (const contact of contacts) {
//       if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
//         alert(`${newContact.name} is already in contacts`);
//         return;
//       }
//     }

//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilterContact = () => {
//     const { contacts, filter } = this.state;

//     const toNormalazedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(toNormalazedFilter)
//     );
//   };

//   deleteContact = contactsId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContact = this.getFilterContact();
//     return (
//       <Wrapper>
//         <TitleText>Phonebook</TitleText>
//         <ContactForm handleSubmit={this.handleSubmit} />
//         <SearchContact value={filter} onChange={this.changeFilter} />
//         <h2>Contacts</h2>
//         <ListContacts
//           filter={filteredContact}
//           onDeleteContacts={this.deleteContact}
//         />
//       </Wrapper>
//     );
//   }
// }

// export default App;
