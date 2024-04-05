import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.stylekey.shop',
  withCredentials: true,
});

//refreshToken 보내고 accessToken 요청하는 로직을 axiosInstance로 할 경우 무한루프에 빠져서 새로운 axiosInstance를 생성했습니다.
// const axiosInstanceForRefresh = axios.create({
//   baseURL: 'http://13.125.106.125:9000',
//   withCredentials: true,
// });

// // Response Interceptor 설정 (일단은 accessToken이랑 refreshToken 때문에 response 만 생성했음)
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // 성공적인 응답 처리
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     // error.config에 들어있는것들
//     // url: 요청이 보내진 URL.
//     // method: 요청 방식 (예: 'get', 'post').
//     // data: 요청과 함께 보낸 데이터 (POST, PUT 요청의 경우).
//     // headers: 요청에 사용된 HTTP 헤더.
//     // params: URL 파라미터 (GET 요청의 경우).
//     // timeout: 요청의 타임아웃 설정.

//     if (error.response.status === 401 && !originalRequest._retry) {
//       //에러 401이면 accesstoken 유효기간 지난거
//       originalRequest._retry = true;

//       try {
//         // refreshToken으로 새 accessToken 요청
//         const refreshToken = localStorage.getItem('refreshToken');
//         //post 엔드포인트는 나중에 백한테 받고 변경해야 됨
//         const response = await axiosInstanceForRefresh.post('/refresh-token', {
//           refreshToken: refreshToken,
//         });

//         const { accessToken } = response.data;

//         // 새로운 accessToken 저장
//         localStorage.setItem('accessToken', accessToken);

//         // 새 accessToken으로 요청 헤더 설정
//         axiosInstance.defaults.headers.common[
//           'Authorization'
//         ] = `Bearer ${accessToken}`;
//         originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

//         // 원래 요청 재실행
//         return axiosInstance(originalRequest);
//       } catch (err) {
//         // 에러 처리
//         console.error('Error during token refresh:', err);
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('refreshToken');
//         // 여기에 로그아웃 로직이나 로그인 페이지로의 리디렉션 추가 가능
//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
