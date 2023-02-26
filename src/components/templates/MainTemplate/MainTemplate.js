import React from 'react';

import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';

import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
