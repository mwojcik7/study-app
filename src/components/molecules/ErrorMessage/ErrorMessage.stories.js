import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden !important;
`;

export default {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};
