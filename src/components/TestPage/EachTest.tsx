import { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../common/Common';

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

interface EachTestProps {
  question: TestQuestion;
  handleSelect: (id: number, ans: number) => void;
}

// TODO: props로 질문 내용 받기
function EachTest({ question, handleSelect }: EachTestProps) {
  const [selected, isSelected] = useState(-1);

  return (
    <TextBox>
      <Text $fontSize={18} $fontWeight={600} $marginBottom={12}>
        {question.content}
      </Text>
      {question.answers.map((el) => {
        return (
          <AnsBox
            onClick={() => {
              handleSelect(question.question_id, el.answer_id);
              isSelected(el.answer_id);
            }}
            key={el.answer_id}
            $selected={el.answer_id === selected}
          >
            {el.content}
          </AnsBox>
        );
      })}
    </TextBox>
  );
}

export default EachTest;

const TextBox = styled.div`
  margin: 20px 0;
`;

const AnsBox = styled.div<{ $selected: boolean }>`
  /* height: 40px; */
  border-radius: 4px;
  background-color: ${({ $selected }) => ($selected ? 'black' : '#fff')};
  color: ${({ $selected }) => ($selected ? '#fff' : 'black')};
  border: 0.5px solid black;
  padding: 12px 0;

  font-weight: 500;
  font-size: 14px;
  text-align: center;

  margin-bottom: 6px;
`;
