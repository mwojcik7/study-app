import { Average } from 'components/atoms/Average/Average.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 40px;
`;

export const BigAverage = styled(Average)`
  position: absolute;
  left: 40px;
  width: 68px;
  height: 68px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledDetails = styled.div`
  width: 100%;
  padding: 40px;
`;

export const StyledLabel = styled.h3`
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledInfo = styled.p`
  margin: 10px 20px 20px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.l)};
`;

export const StyledSubjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;
