import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledTextField,
  EditBtn,
  StyledEditBtn,
  boxStyle,
  iconStyle,
} from './ModalProfile.mui.styled';
import { AvatarEdit } from '../AvatarEdit/AvatarEdit';
import { EditForm, CloseBtn } from './ModalProfile.styled';
import {
  updateAvatar,
  updateSubscription,
  updateName,
} from 'redux/Auth/authOperation';
import { SubscriptionRadio } from 'components/SubscriptionRadio/SubscriptionRadio';
import { useAuth } from 'components/hooks/useAuth';
import { Spinner } from 'components/Loader/Loader';

export const ModalProfile = ({ variantColor }) => {
  const [avatarPrev, setAvatarPrev] = useState('');
  const [newAvatar, setNewAvatar] = useState('');
  const [open, setOpen] = useState(false);
  const [editSubscr, setEditSubscr] = useState('');
  const [editName, setEditName] = useState('');
  const dispatch = useDispatch();
  const { user, isPending } = useAuth();
  console.log(isPending);

  const data = useSelector(state => console.log(state));

  const nameInputValue = e => {
    setEditName(e.target.value);
  };

  console.log(5);

  const handleAvatarChange = e => {
    const avatar = e.target.files[0];

    setNewAvatar(avatar);

    setAvatarPrev(URL.createObjectURL(avatar));
  };

  const changeAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', newAvatar);

    dispatch(updateAvatar(formData));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (avatarPrev) changeAvatar();
    if (editSubscr) dispatch(updateSubscription({ subscription: editSubscr }));
    if (editName) dispatch(updateName({ name: editName }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledEditBtn onClick={() => setOpen(!open)}>
        <p>Edit profile</p>
        <EditIcon sx={iconStyle} />
      </StyledEditBtn>

      <p
        style={{
          color: `${variantColor}`,
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        Subscription: {user?.subscription}
      </p>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <CloseBtn onClick={() => setOpen(!open)}>
            <CloseIcon />
          </CloseBtn>
          <EditForm onSubmit={handleSubmit}>
            <AvatarEdit
              handleAvatarChange={handleAvatarChange}
              avatarPrev={avatarPrev}
            />
            <label>
              <StyledTextField
                onChange={nameInputValue}
                value={editName}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </label>
            <SubscriptionRadio editSubscr={setEditSubscr} />
            {isPending ? (
              <Spinner />
            ) : (
              <EditBtn type="submit">Save changes</EditBtn>
            )}
          </EditForm>
        </Box>
      </Modal>
    </div>
  );
};
