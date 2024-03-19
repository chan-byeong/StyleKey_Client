import styled from 'styled-components';

import { Text, Button } from '../../common/Common';

export const ContentsBox = styled.div`
  width: 100%;
  /* height: 250px; */

  margin-top: 24px;
  border-radius: 12px;
  padding: 25px 19px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KeyTypo = styled.div`
  color: #000;
  font-family: Pretendard;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyleResultTypo = styled.span`
  margin-left: 2px;
  padding-left: 4px;
  padding-right: 3.5px;
  box-shadow: inset 0rem -1rem 0rem #d9d9d9;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 448px;
  margin-top: 14px;
`;

export const Title = styled(Text)`
  box-shadow: inset 0 -0.65rem #d9d9d9;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

export const ListItem = styled.li`
  list-style-type: disc;
  margin-left: 20px;
  line-height: 125%;
  margin-bottom: 16px;
  word-break: keep-all;
`;

export const LinkButton = styled(Button)`
  margin: 30px auto;
  & > img {
    margin-right: 10px;
  }
`;
