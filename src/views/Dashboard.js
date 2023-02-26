import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import useModal from 'components/organisms/Modal/useModal';
import { useGetGroupsQuery } from 'store';

import StudentsList from 'components/organisms/StudentsList/StudentsList';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title.styles';

const Dashboard = () => {
  const [currentStudentId, setCurrentStudentId] = useState([]);
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const { data, isLoading } = useGetGroupsQuery();

  const handleOpenStudentDetails = async (id) => {
    setCurrentStudentId(id);
    handleOpenModal();
  };

  const handleCloseStudentDetails = async (id) => {
    setCurrentStudentId(null);
    handleCloseModal();
  };

  if (isLoading) {
    return (
      <Wrapper>
        <TitleWrapper>Loading...</TitleWrapper>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0) return <Navigate to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {data.groups.map((group) => (
            <Link key={group.id} to={`/group/${group.id}`}>
              {group.id}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseStudentDetails}>
          {currentStudentId && <StudentDetails student={currentStudentId} />}
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
