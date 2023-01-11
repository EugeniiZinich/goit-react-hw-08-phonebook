import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import toast from 'react-hot-toast';
import { addContact } from 'redux/tasksSlice';
import { FormSubmit } from './ContactForm.style';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return null;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    for (const contact of contacts) {
      if (contact.name.trim().toLowerCase === name.trim().toLowerCase) {
        toast.error(`Contact with name ${name} is already exist! `);
        return;
      }
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <FormSubmit onSubmit={formSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Ivo Bobul"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          placeholder="Exemple: +380999999999"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </FormSubmit>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

// handleChange = e => {
//   const { name, value } = e.currentTarget;

//   this.setState({ [name]: value });
// };

// formSubmit = e => {
//   e.preventDefault();

//   this.props.handleSubmit(this.state);

//   this.reset();
// };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
// return (
//   <FormSubmit onSubmit={this.formSubmit}>
//     <label>
//       <p>Name</p>
//       <input
//         type="text"
//         name="name"
//         placeholder="Ivo Bobul"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={this.handleChange}
//       />
//     </label>
//     <label>
//       <p>Number</p>
//       <input
//         type="tel"
//         name="number"
//         placeholder="Exemple: +380999999999"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         value={number}
//         onChange={this.handleChange}
//       />
//     </label>
//     <br />
//     <button type="submit">Add contact</button>
//   </FormSubmit>
// );
//   }
// }

// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func,
// };
