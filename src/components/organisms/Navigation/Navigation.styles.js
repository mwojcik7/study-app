import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    text-align: right;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  margin: 15px 20px 15px auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  cursor: pointer;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -20px;
    width: 18px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }
`;
