import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%auto;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="할일을 입력해 주세요" />
    </Box>
  );
}
