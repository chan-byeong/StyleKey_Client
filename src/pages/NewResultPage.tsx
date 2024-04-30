import * as R from '../components/ResultPage/styles/ResultPage.style';
import MobileLayout from '../components/common/Layout';
import Description from '../components/ResultPage/Description';
import MoreBox from '../components/ResultPage/MoreBox';
import link_img from '../components/ResultPage/images/link.svg';
import retry_img from '../components/ResultPage/images/update.svg';
import Headline from '../components/ResultPage/Headline';
import StylePointDetail from '../components/stylepoints/StylePointDetail';

interface TestResultType {
  score: number;
  style_point_id: number;
  style_point_image: string;
}

// 테스트 화면에서 결과 POST 후 결과 로컬 스토리지에 저장 후 네비게이트 -
// 결과 페이지에서 로컬 스토리지에 있는 결과 받아와서 화면 그리기
function NewResultPage() {
  const localVal = localStorage.getItem('testResultDetails') as string;
  const result = JSON.parse(localVal) as TestResultType[];

  const mainPt = StylePointDetail(result[0].style_point_id);
  const subPt = StylePointDetail(result[1].style_point_id);

  return (
    <MobileLayout>
      <Headline mainPt={mainPt} result={result[0]} />
      <Description
        styleDetail={mainPt?.styledetail}
        stylePoint={mainPt?.stylepoint}
        details={mainPt?.details}
      />
      <R.LinkButton>
        <img src={link_img} alt="link" />
        결과 공유하기
      </R.LinkButton>
      <MoreBox
        title="이런 유형도 잘 어울려요!"
        imgSrc={result[1].style_point_image}
        caption={subPt?.styledetail}
        btnText={`${subPt?.stylepoint} 포인트 보기`}
      />
      {/* TODO: 스타일 포인트 별 코디룩과 브랜드 API 요청 -> 코디룩 이미지 , 브랜드 이미지 리스트 넣기 */}
      <MoreBox
        title="이런 코디룩과 브랜드는 어때요?"
        caption="나의 유형에 어울리는 코디룩과 브랜드를 확인해보세요!"
        btnText="더 보러 가기"
      />
      <R.LinkButton>
        <img src={retry_img} alt="retry" />
        테스트 다시하기
      </R.LinkButton>
    </MobileLayout>
  );
}

export default NewResultPage;
