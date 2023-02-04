import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Inner = styled.div`
  display: flex;

  max-width: 200px;

  & span {
    padding-right: 5px;
  }
`;
