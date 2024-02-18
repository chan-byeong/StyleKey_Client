import styled from 'styled-components';
import { Caption } from '../../../components/common/Text';

export const ImgContainer = styled.img`
  height: 174px;
  margin-top: 70px;
  margin-bottom: 8px;
  //iphone 6/7/8 plus
  @media (max-height: 737px) {
    height: 140px;
  }
  //iphone SE
  @media (max-height: 668px) {
    height: 130px;
  }
`;

export const ButtonContainer = styled.div`
  height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
`;

export const SnsCaption = styled(Caption)`
  width: 170px;
  color: #737373;
  line-height: 150%;
  padding-bottom: 8px;
  border-bottom: 1px solid #999;
`;

export const LoginButton = styled.button`
  width: 100%;
  max-width: 320px;
  height: 46px;
  border-radius: 10px;
  border: none;
`;

export const KakaoButton = styled(LoginButton)`
  background-color: #fae100;
`;

export const GoogleButton = styled(LoginButton)`
  background-color: #fff;
  border: 1px solid black;
`;