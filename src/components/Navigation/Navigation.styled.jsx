import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ variantColor }) => variantColor};
    transform: scaleX(0);
    transition: transform 0.25s;
  }

  &::after {
    bottom: 12px;
    transform-origin: right;

    @media (min-width: 320px) and (max-width: 769px) {
      bottom: 1px;
    }
  }

  &::before {
    top: 12px;
    transform-origin: left;

    @media (min-width: 320px) and (max-width: 769px) {
      display: none;
    }
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after,
  &.active::before {
    transform: scaleX(1);

    @media (min-width: 320px) and (max-width: 769px) {
      transform: scaleX(1);
    }
  }

  @media (min-width: 320px) and (max-width: 769px) {
  }
`;
