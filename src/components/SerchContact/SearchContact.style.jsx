import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;
