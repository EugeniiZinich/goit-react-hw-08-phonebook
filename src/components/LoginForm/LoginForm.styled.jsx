import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 100px auto;
  width: 568px;
  max-width: 100%;
  min-height: 480px;
  background: #fff;

  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 100%;
  width: 100%;
  padding: 20px 40px;
`;

export const Title = styled.h1`
  color: black;
`;
