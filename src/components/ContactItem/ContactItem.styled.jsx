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
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 450px;

  & > span {
    font-family: 'Dancing Script', cursive;
  }

  @media (min-width: 320px) and (max-width: 769px) {
    & > span {
      font-size: 16px;
    }
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;

  color: #fff;
  background-color: transparent;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;

  transition: 0.5s;
  border: none;

  &:hover {
    box-shadow: none;
    color: red;
  }
`;
