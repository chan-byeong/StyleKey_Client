import React, { Suspense, useRef } from 'react';
import * as Ho from '../components/HomePage/styles/Homepage.styles';
import MobileLayout from '../components/common/Layout';
import Loading from '../components/common/Loading';

import DownButton from '../components/HomePage/images/Downbutton.svg';
import Slide from '../components/swiper/Swiper';

import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const navigateToTestPage = () => {
    navigate('/teststart');
  };
  const testAccessToken = localStorage.getItem('accessToken');
  console.log('accessToken:', testAccessToken);
  const homeBottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (homeBottomRef.current) {
      const homeBottomPosition =
        homeBottomRef.current.getBoundingClientRect().top;
      const offsetPosition = homeBottomPosition + window.scrollY - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <MobileLayout>
      <Ho.HomeContainer>
        <Ho.HomeTop>
          <Ho.Container>
            <Suspense fallback={<Loading />}>
              <Slide />
            </Suspense>
          </Ho.Container>
        </Ho.HomeTop>
        <Ho.HomeMiddle>
          <Ho.TestButton onClick={navigateToTestPage}>
            패션 취향 테스트 하러 가기
          </Ho.TestButton>
          <Ho.BlinkingImage1
            src={DownButton}
            alt="스크롤 버튼"
            style={{
              width: '40px',
              margin: '0 auto',
            }}
            onClick={scrollToBottom}
          ></Ho.BlinkingImage1>
        </Ho.HomeMiddle>
      </Ho.HomeContainer>

      <Ho.HomeBottom ref={homeBottomRef}>
        <div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
        </div>
      </Ho.HomeBottom>
    </MobileLayout>
  );
};

export default Homepage;
