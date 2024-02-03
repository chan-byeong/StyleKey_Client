import { useNavigate } from 'react-router-dom';

import KakaoLogo from '../../pages/Loginpage/images/kakaologin.svg';

const KakaoLogin = () => {
  const handleKakaoLogin = () => {
    const K_REST_API_KEY = '0863428c06e9c37bf600d68470c14ee0';
    const K_REDIRECT_URI = 'http://localhost:5173/oauth/callback/kakao';
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
  };

  return (
    <img
      src={KakaoLogo}
      alt="카카오 로고"
      style={{ width: '80%', cursor: 'pointer', marginBottom: '10px' }}
      onClick={handleKakaoLogin}
    />
  );
};

export default KakaoLogin;
