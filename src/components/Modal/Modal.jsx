import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { useContact } from 'components/hooks/useContact';
import { getContacts } from 'redux/ContactsSlice/selectors';
import {
  updateContact,
  fetchContacts,
} from 'redux/ContactsSlice/contactOperation';
import { StyledBtn } from 'components/LoginForm/Login.mui.style';
import { Form } from 'components/LoginForm/LoginForm.styled';
import { StyledTextField } from 'components/SerchContact/SearchContact.mui.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
};

export const ModalEdit = ({ id, name, phone }) => {
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editPhone, setEditPhone] = useState(phone);
  const { isLoading } = useContact();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setEditName(value);
        break;
      case 'phone':
        setEditPhone(value);
        break;
      default:
        return null;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    const editInform = { editName, editPhone, id };

    const addedNumber = contacts.items.some(
      contact => contact.phone === editPhone
    );

    if (addedNumber) {
      toast.error(`Contact with number ${editPhone} is already exist! `);
      return;
    }

    dispatch(updateContact(editInform))
      .then(unwrapResult)
      .then(response => {
        toast.success(`${response.name} was edited`);
        setOpen(false);
        dispatch(fetchContacts());
      })
      .catch(e => toast.error(`Something wrong ${e.message}`));

    setEditName(editName);
    setEditPhone(editPhone);
  };

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>
        <AutoFixHighIcon />
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onSubmit={formSubmit}>
            <Button
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                minWidth: 45,
              }}
            >
              <CloseIcon
                onClick={() => setOpen(!open)}
                sx={{
                  color: '#fff',
                  width: 25,
                  height: 40,
                }}
              />
            </Button>
            <h2 style={{ padding: '0 0 10px', color: '#fff' }}>Edit contact</h2>
            <label>
              <StyledTextField
                type="text"
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{ width: '25ch' }}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={editName}
                onChange={handleChange}
              />
            </label>
            <label>
              <StyledTextField
                type="tel"
                name="phone"
                id="outlined-basic"
                label="Number"
                variant="outlined"
                sx={{ width: '25ch' }}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={editPhone}
                onChange={handleChange}
              />
            </label>
            <br />
            {isLoading ? (
              <Loader />
            ) : (
              <StyledBtn variant="contained" type="submit">
                Edit
              </StyledBtn>
            )}
          </Form>
        </Box>
      </Modal>
    </div>
  );
};
