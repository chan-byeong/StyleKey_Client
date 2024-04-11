import { useState } from 'react';
import styled from 'styled-components';

import EachTest from './EachTest';
import MobileLayout from '../common/Layout';

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
  const [answers, setAnswers] = useState({});

  const handleAnswerSelect = (question_id: number, select: number) => {
    setAnswers((pre) => ({ ...pre, [question_id]: select }));
  };

  const AllAnswered = Object.keys(answers).length === 8;

  return (
    <MobileLayout>
      <Wrapper>
        {TEMP.map((el, idx) => {
          return (
            <EachTest
              handleSelect={handleAnswerSelect}
              question={el}
              key={idx}
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
  padding-bottom: 50px;
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
