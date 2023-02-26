import React from 'react';
import PropTypes from 'prop-types';

import { UserShape } from 'types';
import { useRemoveStudentMutation } from 'store';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

import { StyledInfo, Wrapper } from './StudentsListItem.styles';
import { Average } from 'components/atoms/Average/Average.styles';

const StudentsListItem = ({ userData: { id, name, attendance = '0%', average }, ...props }) => {
  const [removeStudent] = useRemoveStudentMutation();

  const handleRemoveStudent = (e) => {
    e.preventDefault();
    removeStudent({ id: id });
  };

  return (
    <Wrapper {...props}>
      <Average average={average}>{average}</Average>
      <StyledInfo onClick={props.click}>
        <p>
          <span>{name}</span>
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={handleRemoveStudent} />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
