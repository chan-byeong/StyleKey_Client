import styled from 'styled-components';
import { Caption } from '../../../components/common/Common';
import kakao_img from '../images/Kakaotalk.png';
import google_img from '../images/Google.png';

export const ImgContainer = styled.img`
  height: 143.5px;
  object-fit: contain;
  margin-top: 70px;
  margin-bottom: 8px;
`;

export const ImgContainer2 = styled.img`
  height: 25dvh;
  margin: 10dvh auto 7dvh;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SnsCaption = styled(Caption)`
  width: 170px;
  color: #737373;
  line-height: 150%;
  padding-bottom: 8px;
  border-bottom: 1px solid #999;
  margin-bottom: 24px;
`;

export const LoginButton = styled.button`
  width: 100%;
  max-width: 320px;
  height: 46px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: black;
  position: relative;
  margin-bottom: 24px;
`;

export const KakaoButton = styled(LoginButton)`
  background-color: #fae100;
  &::before {
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    background-image: url(${kakao_img});
    background-size: contain;
    position: absolute;
    left: 25px;
  }
`;

export const GoogleButton = styled(LoginButton)`
  background-color: #fff;
  border: 1px solid black;
  &::before {
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    background-image: url(${google_img});
    background-size: contain;
    position: absolute;
    left: 25px;
  }
`;
