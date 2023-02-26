import styled from 'styled-components';

export const Average = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background-color: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
