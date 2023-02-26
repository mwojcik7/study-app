import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 80%;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
`;

export const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`;
