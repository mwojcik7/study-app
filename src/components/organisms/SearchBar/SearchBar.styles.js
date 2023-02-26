import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input.styles';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Input} {
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StatusInfo = styled.div`
  margin-right: 40px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 500px;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: scroll;
  list-style: none;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const SearchResultsItem = styled.li`
  width: 100%;
  padding: 20px 5px;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightPurple : theme.colors.white)};
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
