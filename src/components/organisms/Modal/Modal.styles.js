import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 600px;
  min-height: 700px;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);

  &:focus {
    outline: none;
  }
`;
