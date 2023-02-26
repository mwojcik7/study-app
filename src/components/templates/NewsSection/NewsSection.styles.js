import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  padding: 50px;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  width: 100%;
  max-width: unset;
  margin: 30px 0;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100%;
    max-height: 250px;
    object-fit: cover;
  }
`;

export const ModalArticleWrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  img {
    margin-top: 10px;
  }

  p {
    line-height: 1.6;
  }
`;
