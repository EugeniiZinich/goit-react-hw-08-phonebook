import styled from 'styled-components';

export const Form = styled.form`
  font-family: 'Dancing Script', cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  height: 450px;
  width: 450px;
  padding: 20px 40px;
`;

export const Title = styled.h1`
  color: black;
  font-size: 27px;
`;
