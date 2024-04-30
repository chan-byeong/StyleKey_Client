import styled from 'styled-components';

export const SideBarWrapper = styled.div<{ isOpen: boolean }>`
  width: 250px;
  height: 100%;
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  top: 0;
  background: #fff;
  transition: left 0.3s ease;
  overflow: hidden;
  z-index: 10;
`;

export const Shadow = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MenuTop = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid black;

  & > .logo {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 30px;
  }

  & > .btn {
    display: block;
    position: absolute;
    left: 15px;
    top: 30px;
    height: 20px;
    width: 20px;
  }
`;

export const ToggleBtn = styled.div`
  height: 48px;
  padding: 14px 15px;
  font-size: 18px;
  font-weight: 400;
  text-align: left;

  color: black;
  border-bottom: 1px solid black;
`;

export const TogglBox = styled.div<{ isToggled: boolean }>`
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  max-height: ${({ isToggled }) => (isToggled ? '200px' : '0')};
  opacity: ${({ isToggled }) => (isToggled ? '1' : '0')};
  overflow: hidden;
`;

export const MenuBtn = styled.div`
  height: 42px;
  padding: 13px 15px;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  background-color: #f0f0f0;
  color: #737373;
  border-bottom: 1px solid #737373;
`;
