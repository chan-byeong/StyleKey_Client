import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header.tsx';

const CenteredContainer = styled.div`
  max-width: 390px; // 최대 가로 길이 (피그마에 있는 대로)
  min-width: 320px; // 최소 가로 길이 (아이폰 SE)
  margin: 0 auto; // 가로 중앙 정렬
  padding: 0 16px;
  height: 100vh; // 세로 길이는 viewheight 전체 퍼센트 차지
  background-color: lightgreen;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CenteredContainer>
        <Header />
      </CenteredContainer>
    </>
  );
}

export default App;
