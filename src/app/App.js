import React, { useState } from 'react';

import { useSuggestions } from 'hooks/use-suggestions';
import Search from 'components/search';
import ErrorBoundary from 'components/error-boundary';

import { Wrapper } from 'app/styled';

import './App.css';

export default function App() {
  const [searchResults, newSearchResults, index, setArrowKeys, error] = useSuggestions(
    []
  );
  const [wrapperActive, setWrapperActive] = useState(true);

  return (
    <>
      <Wrapper active={wrapperActive}>
        <ErrorBoundary error={error}>
          <Search
            searchResults={searchResults}
            newSearchResults={newSearchResults}
            index={index}
            setArrowKeys={setArrowKeys}
            backgroundActive={setWrapperActive}
          />
        </ErrorBoundary>
      </Wrapper>
    </>
  );
}
