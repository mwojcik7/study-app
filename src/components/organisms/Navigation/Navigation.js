import { useAuth } from 'hooks/useAuth';

import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          App
        </h1>
      </Logo>
      <StyledLink to="/group" exact="true">
        Dashboard
      </StyledLink>
      <StyledLink to="/notes" exact="true">
        Notes
      </StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
