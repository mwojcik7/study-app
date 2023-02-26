import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 50px;
`;

export const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
  height: 100%;
  overflow-y: scroll;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  nav a {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 15px;
    padding: 5px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }

  nav a:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
