import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteBtn } from 'components/ListContacts/ListContacts.style';
import { deleteContacts } from 'redux/ContactsSlice/operation';
import { Container, Inner } from './ContactItem.styled';

export const ContactItem = ({ name, id, number }) => {
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
        <span>{name}: </span>
        <span>{number}</span>
      </Inner>

      <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        <DeleteIcon />
      </DeleteBtn>
    </Container>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
