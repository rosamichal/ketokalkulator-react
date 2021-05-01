import styled from 'styled-components'

export const Input = styled.input`
  padding: 5px;
  border-color: ${({ theme }) => theme.common.input.borderColor};
  border-radius: 10px;
  margin: 0;
`;

export const WideInput = styled(Input)`
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border-color: ${({ theme }) => theme.common.textArea.borderColor};
  border-radius: 10px;
  margin: 10px 0 15px;
  width: 100%;
`;