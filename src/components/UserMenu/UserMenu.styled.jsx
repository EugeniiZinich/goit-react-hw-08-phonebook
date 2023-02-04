import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;

  & span {
    color: white;
  }

  & button {
    background-color: #e1d4d4;
    border: none;
    border-radius: 20px;
    transition: all 0.3s ease-out;
  }

  & button:hover {
    background-color: #2d2de0;
    color: white;
  }
`;
