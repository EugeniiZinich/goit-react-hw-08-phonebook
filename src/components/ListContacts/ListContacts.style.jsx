import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  text-align: center;

  max-width: 550px;
  max-height: 700px;

  @media (min-width: 320px) and (max-width: 769) {
    max-width: 350px;
  }
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

  background: linear-gradient(
    3deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(239, 238, 231, 0.6699929971988796) 100%
  );
  border-radius: 20px;
  min-height: 80px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
