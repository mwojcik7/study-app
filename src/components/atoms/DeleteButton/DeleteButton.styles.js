import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: 0 10px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
