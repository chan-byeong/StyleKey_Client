import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header.tsx';
import Homepage from './pages/Homepage.tsx';
import RedirectPage from './components/loginpage/Redirect.tsx';
import Login from './pages/Login.tsx';
import Mypage from './pages/Mypage.tsx';
import ResultPage from './pages/ResultPage.tsx';
import TestStartPage from './pages/TestStartpage.tsx';
import TestPage from './pages/TestPage.tsx';

// TEMP
import LikePage from './components/Mypage/LikePage/LikePage.tsx';

const CenteredContainer = styled.div`
  max-width: 390px; // 최대 가로 길이 (피그마에 있는 대로)
  min-width: 320px; // 최소 가로 길이 (아이폰 SE)
  margin: 0 auto; // 가로 중앙 정렬
  position: relative;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 600 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <CenteredContainer>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/mypage">
                <Route index element={<Mypage />} />
                <Route path="/mypage/history" />
                <Route path="/mypage/likes" element={<LikePage />} />
              </Route>
              <Route path="/oauth/redirect" element={<RedirectPage />} />
              <Route path="/teststart" element={<TestStartPage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/test" />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/points">
                <Route path="/points/detail">
                  <Route path="/points/detail/cordinate" />
                </Route>
              </Route>
              <Route path="/brands">
                <Route path="/brands/detail" />
              </Route>
            </Routes>
          </BrowserRouter>
        </CenteredContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
