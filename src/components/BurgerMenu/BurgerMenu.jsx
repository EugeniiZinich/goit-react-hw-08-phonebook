import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Burger } from './BurgerMenu.styled';
import { isOpenMenu } from 'redux/ContactsSlice/contactSlice';
import { getIsOpen } from 'redux/ContactsSlice/selectors';
import { getLocation } from 'redux/ContactsSlice/selectors';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useSelector(getLocation);
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsOpen);

  const variantColor =
    location === '/contacts' || location === '/addcontact' ? '#fff' : '#1976d2';

  useEffect(() => {
    dispatch(isOpenMenu(open));
  }, [dispatch, open]);

  return (
    <>
      <Burger open={isOpen} color={variantColor} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
    </>
  );
};
