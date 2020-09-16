import React, { useState } from 'react';

import { useSuggestions } from 'hooks/use-suggestions';
import Search from 'components/search';

import { Wrapper } from 'app/styled';

import './App.css';

export default function App() {
  const [searchResults, newSearchResults, index, setArrowKeys] = useSuggestions([]);
  const [wrapperActive, setWrapperActive] = useState(true);

  return (
    <>
      <Wrapper active={wrapperActive}>
        <Search
          searchResults={searchResults}
          newSearchResults={newSearchResults}
          index={index}
          setArrowKeys={setArrowKeys}
          backgroundActive={setWrapperActive}
        />
      </Wrapper>
    </>
  );
}
