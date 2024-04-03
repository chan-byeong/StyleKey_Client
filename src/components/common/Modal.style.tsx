import styled from 'styled-components';
import cancel_icon from './images/cancel.png';

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  width: fit-content;
  height: fit-content;
  min-width: 360px;
  min-height: 280px;
  background-color: #fff;

  border-radius: 12px;
  border: 1px solid black;
`;

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 60px;
  font-weight: 500;
  text-align: center;
`;

export const CancleIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${cancel_icon});
  background-size: contain;
  position: absolute;
  top: 20px;
  right: 18px;

  cursor: pointer;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--Grey-900, #dcdfe3);
  width: 100%;
`;
