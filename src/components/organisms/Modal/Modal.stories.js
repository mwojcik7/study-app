import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from './Modal';

import { Average } from 'components/atoms/Average/Average.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import { BigAverage, StyledDetails, StyledInfo, StyledLabel, StyledSubjectInfo, Wrapper } from 'components/molecules/StudentDetails/StudentDetails.styles';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const studentData = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  course: 'Business Philosophy',
  grades: [
    {
      subject: 'Business Philosophy',
      average: '3.3',
    },
    {
      subject: 'Marketing',
      average: '4.7',
    },
    {
      subject: 'Modern Economy',
      average: '2.5',
    },
  ],
};

const Template = (args) => (
  <Modal {...args}>
    <Wrapper>
      <BigAverage average={studentData.average}>{studentData.average}</BigAverage>
      <Title isBig>{studentData.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{studentData.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {studentData.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average average={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  studentData: { ...studentData },
  isOpen: true,
};
