import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import EachTest from './EachTest';
import MobileLayout from '../common/Layout';

interface Answers {
  [id: number]: number;
}

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

function Tests() {
  const [answers, setAnswers] = useState<Answers>({});
  const scrollToRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Whenever the component updates, scroll the referenced component into view
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [Object.keys(answers).length]);

  const handleAnswerSelect = (question_id: number, select: number) => {
    setAnswers((pre) => ({ ...pre, [question_id]: select }));
    console.log(answers);
  };

  const AllAnswered = Object.keys(answers).length === 8;

  return (
    <MobileLayout>
      <Wrapper>
        {TEMP.map((el, idx) => {
          let isDisplay =
            idx === 0 ? true : !!(answers[el.question_id - 1] + 1);
          return (
            <EachTest
              handleSelect={handleAnswerSelect}
              question={el}
              key={idx}
              display={isDisplay}
              ref={isDisplay ? scrollToRef : null}
            />
          );
        })}
      </Wrapper>

      <ProgessBtn
        disabled={!AllAnswered}
        onClick={() => console.log(AllAnswered)}
      >
        <Bar $completed={Object.keys(answers).length} />
        <Text>제출하기</Text>
      </ProgessBtn>
    </MobileLayout>
  );
}

export default Tests;

const Wrapper = styled.div`
  /* height: 90vh; */
  /* width: 100%; */
  /* flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center; */
  padding-bottom: 50px;
  overflow: hidden;
`;

const ProgessBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #e2e2e2;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border: none;
  color: #fff;
`;

const Bar = styled.div<{ $completed: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${({ $completed }) => ($completed / 8) * 100}%;
  height: 50px;
  background-color: black;
`;

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
`;
