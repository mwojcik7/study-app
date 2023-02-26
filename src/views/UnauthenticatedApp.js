import { useForm } from 'react-hook-form';

import { useAuth } from 'hooks/useAuth';

import FormField from 'components/molecules/FormField/FormField';

import { Button } from 'components/atoms/Button/Button.styles';
import { FormWrapper, StyledAuthError } from 'views/UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
      <FormField label="login" name="login" id="login" {...register('login', { required: true, value: 'teacher@studyapp.com' })} />
      {errors.login && <StyledAuthError>Login is required</StyledAuthError>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true, value: 'Test123' })} />
      {errors.password && <StyledAuthError>Password is required</StyledAuthError>}
      <Button type="submit">Sign in</Button>
    </FormWrapper>
  );
};

export default UnauthenticatedApp;
