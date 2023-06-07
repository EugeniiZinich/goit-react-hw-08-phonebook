import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  & span {
    color: white;
  }

  & .styledProfileBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 150px;

    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  & .MuiSvgIcon-root:hover {
    color: white;
  }
`;

export const ProfileDashboard = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  top: 75px;
  right: 5px;
  width: 170px;
  height: 150px;
  transition: all 0.3s linear;
  scale: ${({ open }) => (open ? '1' : '0')};

  border-radius: 20%;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;
