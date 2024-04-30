import { useState } from 'react';

import * as S from './styles/Sidebar.style';
import logo_img from './images/stylekeylogo.png';
import backbtn_img from './images/backbutton.svg';

import ToggleMenu from './ToggleMenu';

interface SidebarProps {
  isOpen: boolean;
  toggleSlider: () => void;
}

function SideBar({ isOpen, toggleSlider }: SidebarProps) {
  return (
    <>
      <S.SideBarWrapper isOpen={isOpen}>
        <S.MenuTop>
          <img className="logo" src={logo_img} />
          <img
            className="btn"
            src={backbtn_img}
            alt="back_button"
            onClick={toggleSlider}
          />
        </S.MenuTop>

        <ToggleMenu title="스타일 키">
          <>
            <S.MenuBtn>스타일 키 홈페이지</S.MenuBtn>
            <S.MenuBtn>스타일 키 서비스 소개</S.MenuBtn>
          </>
        </ToggleMenu>

        <ToggleMenu title="패션 취향 테스트">
          <S.MenuBtn>패션 취향 테스트 하러가기</S.MenuBtn>
        </ToggleMenu>

        <ToggleMenu title="스타일 포인트">
          <>
            <S.MenuBtn>스타일 포인트 알아보기</S.MenuBtn>
            <S.MenuBtn>코디룩 모음 보기</S.MenuBtn>
            <S.MenuBtn>아이템 모음 보기</S.MenuBtn>
          </>
        </ToggleMenu>

        <ToggleMenu title="마이페이지">
          <>
            <S.MenuBtn>좋아요</S.MenuBtn>
            <S.MenuBtn>최근 본 아이템</S.MenuBtn>
            <S.MenuBtn>나의 테스트 기록</S.MenuBtn>
          </>
        </ToggleMenu>
      </S.SideBarWrapper>
      {isOpen && <S.Shadow />}
    </>
  );
}

export default SideBar;
