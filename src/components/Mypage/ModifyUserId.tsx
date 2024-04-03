import { useState } from 'react';
import styled from 'styled-components';

interface ModifyUserIdProps {
  currentId: string;
}

const ModifyUserId = ({ currentId }: ModifyUserIdProps) => {
  const [newId, setNewId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(e.target.value);
  };

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={handelSubmit}>
      <Block>
        <span>현재 아이디</span>
        <IdBlock>{currentId}</IdBlock>
      </Block>
      <Block>
        <span>새로운 아이디</span>
        <Input onChange={handleInputChange} />
      </Block>

      <SubmitBtn possible={newId.length > 3} type="submit">
        변경
      </SubmitBtn>
    </Container>
  );
};

export default ModifyUserId;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  justify-content: space-evenly;
  width: 80%;
  height: 200px;
  margin: 0 auto;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IdBlock = styled.div`
  display: inline-flex;
  align-items: center;
  padding-left: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 28px;
  width: 60%;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  padding-left: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 28px;
  width: 60%;
`;

const SubmitBtn = styled.button<{ possible: boolean }>`
  margin: 0 auto;
  height: 40px;
  width: 96px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${({ possible }) => (possible ? '#9b9b9b' : '#fff')};
  border-radius: 10px;
  border: 2px solid #9b9b9b;
  color: ${({ possible }) => (possible ? '#fff' : '#9b9b9b')};
`;
