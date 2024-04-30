import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/auth.tsx';

import Login from './LoginAuth.tsx';
import * as He from './styles/Header.styles.tsx';
import FavoriteButtonLogo from './images/FavoriteButton.svg';
import BackButton from './images/backbutton.svg';
import menuBtn_img from './images/Hamburgerbutton.svg';
import { Text } from '../common/Common.tsx';

import SideBar from './SideBar.tsx';

const PATH_CONVERT: { [key: string]: string } = {
  '/login': '로그인',
  '/teststart': '패션 유형 테스트',
  '/test': '패션 유형 테스트',
  '/mypage': '마이페이지',
  '/mypage/likes': '좋아요',
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const pathName: string = location.pathname;

  const toggleSidebar = () => {
    setIsOpen((pre) => !pre);
  };

  function headerMain() {
    if (PATH_CONVERT[pathName] === undefined) {
      return <He.Logo />;
    } else {
      return <Text $fontWeight={500}>{PATH_CONVERT[pathName]}</Text>; // TestPath에 대한 텍스트
    }
  }

  return (
    <>
      {/* <He.NavBar2></He.NavBar2> */}
      <He.NavBar>
        <SideBar isOpen={isOpen} toggleSlider={toggleSidebar} />
        <He.LeftSection>
          {pathName === '/' ? (
            <He.HeaderButtons onClick={toggleSidebar}>
              <img src={menuBtn_img} alt="메뉴 버튼" />
            </He.HeaderButtons>
          ) : (
            <He.HeaderButtons onClick={() => navigate(-1)}>
              <img src={BackButton} alt="뒤로가기 버튼" />
            </He.HeaderButtons>
          )}
        </He.LeftSection>
        {headerMain()}
        <He.RightSection>
          {pathName === '/' ? (
            auth ? (
              <>
                <He.HeaderButtons>
                  <img src={FavoriteButtonLogo} alt="Favorite Button" />
                </He.HeaderButtons>
                <Login />
              </>
            ) : (
              <Login />
            )
          ) : (
            <></>
          )}
        </He.RightSection>
      </He.NavBar>
    </>
  );
}

export default Header;
