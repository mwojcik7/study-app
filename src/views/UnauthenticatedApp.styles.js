import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const StyledAuthError = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;
