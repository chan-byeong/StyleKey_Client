import { useState, forwardRef } from 'react';
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
  display?: boolean;
}

// TODO: props로 질문 내용 받기
const EachTest = forwardRef<HTMLDivElement, EachTestProps>(
  ({ question, handleSelect, display }, ref) => {
    const [selected, isSelected] = useState(-1);

    return (
      display && (
        <Wrapper>
          <TestBox ref={display ? ref : null}>
            <ContentBox>
              <img alt="image" />
              <Text $fontSize={18} $fontWeight={600} $marginBottom={12}>
                {question.content}
              </Text>
            </ContentBox>

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
          </TestBox>
        </Wrapper>
      )
    );
  },
);

export default EachTest;

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TestBox = styled.div`
  margin: 40px 0;
  width: 100%;
`;

const ContentBox = styled.div`
  height: 235px;
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 24px;
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

  margin-bottom: 16px;
`;
