import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  text-align: center;
  flex-direction: column;

  max-width: 450px;
  max-height: 600px;
`;

export const ContactList = styled.ul`
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-x: hidden;

  background: transparent;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const ContactCard = styled.li`
  display: flex;
  align-items: center;

  background: linear-gradient(
    3deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(239, 238, 231, 0.6699929971988796) 100%
  );
  border-radius: 20px;
  text-align: center;
  min-height: 80px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;

  color: #394497;
  background-color: transparent;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;

  transition: 0.5s;
  border: none;

  &:hover {
    box-shadow: none;
    color: white;
  }
`;
