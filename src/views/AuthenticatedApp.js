import { Routes, Route, Navigate } from 'react-router-dom';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import Notes from 'views/Notes';

import { Wrapper } from './Root.styles';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" exact="true" element={<Navigate to="/group" />} />
          <Route path="/group/:id?" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
