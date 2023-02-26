import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetStudentsQuery } from 'store';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title.styles';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetStudentsQuery(id);

  return (
    <>
      <Title>Students List</Title>
      <StyledList>{isLoading ? <h3>Loading...</h3> : data.students.map((userData) => <StudentsListItem click={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />)}</StyledList>
    </>
  );
};

export default StudentsList;
