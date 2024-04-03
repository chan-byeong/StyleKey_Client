import styled from 'styled-components';
import stylekeylogo from '../images/stylekeylogo.png';
//NavBar2는 사용자가 스크롤 이상하게 했을때 밑에 컴포넌트가
//보이는 상황을 방지하기 위해 선언함
export const NavBar2 = styled.div`
  position: fixed;
  width: 100%;
  z-index: 98;
  height: 70px;
  background-color: white;
`;

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: calc(100% - 32px);
  left: 16px;
  right: 16px;
  z-index: 98;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  height: 70px;
  border-bottom: 1px solid black;
  background-color: white;
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 120px;
  height: 33px;
  background-image: url(${stylekeylogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 10px;
  cursor: pointer;
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;
