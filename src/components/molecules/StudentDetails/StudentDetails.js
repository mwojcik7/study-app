import { useGetStudentByIdQuery } from 'store';

import { Average } from 'components/atoms/Average/Average.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import { BigAverage, StyledDetails, StyledInfo, StyledLabel, StyledSubjectInfo, Wrapper } from './StudentDetails.styles';

const StudentDetails = ({ student }) => {
  const { data, isLoading } = useGetStudentByIdQuery(student);

  if (isLoading) {
    return (
      <Wrapper>
        <Title isBig>Loading...</Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BigAverage average={data.students.average}>{data.students.average}</BigAverage>
      <Title isBig>{data.students.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{data.students.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {data.students.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average average={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
