import * as R from './styles/ResultPage.style';
import { Text } from '../common/Common';

interface TestResultType {
  score: number;
  style_point_id: number;
  style_point_image: string;
}

interface StylePointDetails {
  stylepoint: string;
  styledetail: string;
  details: string[];
}

interface HeadlineProps {
  mainPt: StylePointDetails;
  result: TestResultType;
}
// result[0], 메인포인트 변수,
function Headline({ mainPt, result }: HeadlineProps) {
  const stpLines = mainPt.styledetail.split('\n');
  return (
    <>
      <div style={{ marginTop: '20px' }}>
        <Text $fontSize={16} $marginBottom={6}>
          당신의 패션 유형은
        </Text>
        <R.KeyTypo>
          {stpLines?.map((line, index) => (
            <p key={index}>
              {line}
              {index === stpLines.length - 1 && (
                <R.StyleResultTypo>{mainPt?.stylepoint}</R.StyleResultTypo>
              )}
            </p>
          ))}
        </R.KeyTypo>
        <Text $fontSize={12} $fontWeight={400} $marginTop={5}>
          {mainPt?.stylepoint} 포인트가 {(result.score / 8) * 100}%로 제일 높게
          나왔어요!
        </Text>
      </div>
      <R.ImgWrapper>
        <img src={result.style_point_image} style={{ width: '100%' }}></img>
      </R.ImgWrapper>
    </>
  );
}

export default Headline;
