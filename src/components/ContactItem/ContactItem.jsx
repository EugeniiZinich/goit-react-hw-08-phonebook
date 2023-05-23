import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import { DeleteBtn } from './ContactItem.styled';
import { deleteContacts } from 'redux/ContactsSlice/contactOperation';
import { Container, Inner } from './ContactItem.styled';
import { ModalEdit } from 'components/Modal/Modal';

export const ContactItem = ({ name, id, phone }) => {
  const stringToColor = string => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const stringAvatar = name => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split('')[0]}${name.split('')[1]}`,
    };
  };

  const dispatch = useDispatch();
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar(`${name}`)} />
      </Stack>
      <Inner>
        <span>Name: {name} </span>
        <span>Number: {phone}</span>
      </Inner>

      <div>
        <ModalEdit id={id} name={name} phone={phone} />
        <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
          <DeleteIcon />
        </DeleteBtn>
      </div>
    </Container>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
