import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAuth } from 'components/hooks/useAuth';
import userAvatar from '../../../img/user-avatar-def.png';
import { AvatarImg, Label, Wrapper, Container } from './AvatarEdit.styled';

export const AvatarEdit = ({ handleAvatarChange, avatarPrev }) => {
  const { user } = useAuth();

  return (
    <Container>
      <Label htmlFor="avatar">
        {avatarPrev ? (
          <AvatarImg src={avatarPrev} alt="Avatar preview" />
        ) : (
          <AvatarImg src={user?.avatar ?? userAvatar} alt="avatar" />
        )}
        <Wrapper>
          <AddCircleOutlineIcon />
        </Wrapper>
      </Label>
      <input
        onChange={handleAvatarChange}
        type="file"
        id="avatar"
        name="avatar"
        style={{
          display: 'none',
        }}
      />
    </Container>
  );
};
