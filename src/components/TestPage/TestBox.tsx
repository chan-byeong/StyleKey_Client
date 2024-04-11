import * as T from './styles/TestPage.style';
import MobileLayout from '../common/Layout';
import { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';
import useGetTest from './hooks/useGetTest';
import { Text } from '../common/Common';
import { useNavigate } from 'react-router-dom';
import NextButton from './images/Next.svg';
import PrevButton from './images/Prev.svg';
import React from 'react';
import { requestPost } from '../../util/http';

interface Answer {
  answer_id: number;
  content: string;
}

interface TestQuestion {
  question_id: number;
  content: string;
  image_url: string;
  answers: Answer[];
}

function createTestData() {
  let data = [];
  for (let i = 0; i < 8; i++) {
    let ai = i * 4;
    data.push({
      question_id: i,
      content: 'OOO일 때 어떻게 하시나요? ' + i,
      image_url: 'https://example.com/image' + i + '.png',
      answers: [
        { answer_id: ai + 0, content: '나는 어쩌구 저쩌구 합니다. ' + i },
        { answer_id: ai + 1, content: '나는 어쩌구 저쩌구 합니다. ' + i },
        { answer_id: ai + 2, content: '나는 어쩌구 저쩌구 합니다. ' + i },
        { answer_id: ai + 3, content: '나는 어쩌구 저쩌구 합니다. ' + i },
      ],
    });
  }
  return data;
}
const TEMP: TestQuestion[] = createTestData();

export default function TestBox() {
  const navigate = useNavigate();

  // 개행 문자를 처리하는 함수
  function formatContent(content: string) {
    return content.split('\\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }

  // const { data: responseData, isLoading, isError } = useGetTest();
  const responseData = TEMP;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  useEffect(() => {
    if (responseData.length > 0) {
      setIsDataLoaded(true);
    }
  }, [responseData]);

  useEffect(() => {
    if (responseData && currentQuestionIndex < responseData.length - 1) {
      const nextQuestionImage = new Image();
      nextQuestionImage.src = responseData[currentQuestionIndex + 1].image_url;
    }
  }, [currentQuestionIndex, responseData]);

  // if (isLoading || !isDataLoaded) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>질문지를 불러오는데 에러가 발생했습니다.</div>;
  // }

  const currentQuestion = responseData[currentQuestionIndex] || {
    content: '',
    answers: [],
  };

  const progress = responseData
    ? (currentQuestionIndex / (responseData.length - 1)) * 100
    : 0;

  const handleSelectAnswer = (answerId: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answerId;
    setSelectedAnswers(updatedAnswers);

    if (currentQuestionIndex < responseData.length - 1) {
      // 먼저 질문을 숨기고
      setShowQuestion(false);

      // 그런 다음에 상태 업데이트를 진행합니다.
      setTimeout(() => {
        // 선택된 답변을 설정하고 다음 질문으로 이동
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        // 질문을 다시 보여줍니다.
        setShowQuestion(true);
      }, 500);
    } else {
      // 마지막 질문의 경우
      setShowQuestion(false);

      setTimeout(async () => {
        try {
          // POST 요청 보내기
          const responseData = await requestPost(updatedAnswers);
          console.log('POST 요청 성공:', responseData);
          const testResultDetails = responseData.data.test_result_details;
          localStorage.setItem(
            'testResultDetails',
            JSON.stringify(testResultDetails),
          );
          navigate('/result');
        } catch (error) {
          console.error('POST 요청 실패:', error);
        }
      }, 500);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < responseData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <MobileLayout>
      <T.TestBody>
        <T.TestNumber>
          <T.TestNumberText>
            <Text $fontSize={24} $fontWeight={400}>
              Q{currentQuestionIndex + 1}
            </Text>
            <Text $fontSize={12} $fontWeight={400}>
              {currentQuestionIndex + 1}/{responseData.length}
            </Text>
          </T.TestNumberText>

          <ProgressBar progress={progress}>
            <div></div>
          </ProgressBar>
        </T.TestNumber>
        <T.TestTextBox>
          <img
            src={PrevButton}
            alt="이전"
            onClick={goToPreviousQuestion}
            style={{
              opacity: currentQuestionIndex === 0 ? 0 : 1,
              pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto',
            }}
          />
          <T.TestContent>
            <T.TestPictureBox>
              <img src={currentQuestion.image_url} alt="테스트 질문 이미지" />
            </T.TestPictureBox>
            {formatContent(currentQuestion.content)}
          </T.TestContent>

          <img
            src={NextButton}
            alt="다음"
            onClick={goToNextQuestion}
            style={{
              opacity: currentQuestionIndex === responseData.length - 1 ? 0 : 1,
              pointerEvents:
                currentQuestionIndex === responseData.length - 1
                  ? 'none'
                  : 'auto',
            }}
          />
        </T.TestTextBox>
        {currentQuestion.answers.map(
          (answer: { content: string; answer_id: number }) => (
            <T.SelectButton
              key={answer.answer_id}
              onClick={() => handleSelectAnswer(answer.answer_id)}
              selected={
                selectedAnswers[currentQuestionIndex] === answer.answer_id
              }
              show={showQuestion}
            >
              {formatContent(answer.content)}
            </T.SelectButton>
          ),
        )}
      </T.TestBody>
    </MobileLayout>
  );
}
