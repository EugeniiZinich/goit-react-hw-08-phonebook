import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { StyledTextField, EditBtn } from './ModalProfile.mui.styled';
import { AvatarEdit } from '../AvatarEdit/AvatarEdit';
import { EditForm } from './ModalProfile.styled';
import { updateAvatar, updateSubscription } from 'redux/Auth/authOperation';
import { SubscriptionRadio } from 'components/SubscriptionRadio/SubscriptionRadio';

const style = {
  position: 'absolute',
  display: 'grid',
  playsItem: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,

  p: 4,
};

export const ModalProfile = ({ variantColor }) => {
  const [avatarPrev, setAvatarPrev] = useState('');
  const [open, setOpen] = useState(false);
  const [editSubscr, setEditSubscr] = useState('');
  const dispatch = useDispatch();

  const handleAvatarChange = e => {
    const avatar = e.target.files[0];
    setAvatarPrev(URL.createObjectURL(avatar));
  };

  console.log(avatarPrev);

  const changeAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', avatarPrev);
    dispatch(updateAvatar(formData));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (avatarPrev) changeAvatar();
    if (editSubscr) updateSubscription({ subscription: editSubscr });
  };

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          color: '#fff',
          backgroundColor: '#0cf',
          width: 150,
          height: 40,
          borderRadius: '10rem',
          '&:hover': {
            backgroundColor: '#2f8da4',
          },
        }}
      >
        <p>Edit profile</p>
        <EditIcon
          sx={{
            height: '17px',
            color: '#fff',
            marginLeft: 1,
            marginBottom: 0.5,
          }}
        />
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditForm onSubmit={handleSubmit}>
            <AvatarEdit
              handleAvatarChange={handleAvatarChange}
              avatarPrev={avatarPrev}
            />
            <label>
              <StyledTextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </label>
            <label>
              <StyledTextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </label>
            <SubscriptionRadio editSubscr={setEditSubscr} />
            <EditBtn type="submit">Save changes</EditBtn>
          </EditForm>
        </Box>
      </Modal>
    </div>
  );
};
