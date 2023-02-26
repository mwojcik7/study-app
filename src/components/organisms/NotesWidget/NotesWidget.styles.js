import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 400px;
  height: auto;
  max-height: 700px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const WidgetHandler = styled.button`
  position: absolute;
  left: -55px;
  top: 40px;
  width: 80px;
  height: 30px;
  transform: rotate(-90deg);
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: white;
  border: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 700px;
  padding: 20px 60px;
  overflow-y: scroll;
`;
