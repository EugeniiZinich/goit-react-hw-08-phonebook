import styled from 'styled-components';

export const Burger = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 15px;
  left: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }

  div {
    width: 30px;
    height: 3.3px;

    background-color: ${({ color }) => color};
    border-radius: 10px;
    transform-origin: 5.7px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
