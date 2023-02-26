import { useError } from 'hooks/useError';

import { Title } from 'components/atoms/Title/Title.styles';
import { Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage = () => {
  const { error } = useError();

  return (
    <Wrapper>
      <Title>Ooops!</Title>
      <p>{error || defaultErrorMessage}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
