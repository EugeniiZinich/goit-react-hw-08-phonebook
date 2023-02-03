import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
          {/* <Button>Register</Button> */}
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
          Log In
        </Typography>
      </NavLink>
    </div>
  );
};
