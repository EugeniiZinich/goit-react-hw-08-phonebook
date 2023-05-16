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

  /* width: 200px;
  height: 100px; */
  max-width: 250px;
  /* background-color: red; */

  /* & span {
    padding-right: 5px;
  } */
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
    color: red;
  }
`;
