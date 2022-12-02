import styled from 'styled-components';

export const FilterInput = styled.input`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
`;

export const FilterWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
