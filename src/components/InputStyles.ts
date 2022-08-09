import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgba(150, 163, 171, .5);
  padding: 10px 2px;
  margin-bottom: 20px;
  font-size: 14px;
  outline: 0;

  &:disabled{
    opacity: .5;
  }
`;