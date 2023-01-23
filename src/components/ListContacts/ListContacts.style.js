import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 350px;
  height: 400px;
`;

export const ContactList = styled.ul`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
  gap: 20px;
  margin-bottom: 100px;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  border-radius: 20px;
`;

export const ContactCard = styled.li`
  width: 250px;
  height: 100px;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
`;

export const DeleteBtn = styled.button`
  color: white;
  margin-top: 20px;
  background: #1da1f2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
  border: none;

  &:hover {
    box-shadow: none;
  }
`;
