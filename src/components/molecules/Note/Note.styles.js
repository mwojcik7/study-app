import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import styled from 'styled-components';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;
