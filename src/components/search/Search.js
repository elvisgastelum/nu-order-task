import React from 'react';

import SearchItemsList from 'components/search-items-list';

import {
  SearchContainer,
  SearchElements,
  SearchBox,
  SearchBoxLogo,
  SearchInputWrapper,
  SearchInput,
  SearchTitle,
} from 'components/search/styled';

import githubLogo from './img/github-logo.png';

/**
 * Render a search component with suggestions
 *
 * @param {{ newSearchResults: (value: string) => void, searchResults: [], index: number, setArrowKeys: (keyCode: number, index?: number) => void, handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void, handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void }} props used for the component
 * @return {JSX.Element} the JSX.Element
 */
export default function Search({
  newSearchResults,
  searchResults,
  index,
  setArrowKeys,
  backgroundActive,
}) {
  const handleText = (e) => newSearchResults(e.target.value);
  const handleArrowKeys = (e) => setArrowKeys(e.keyCode);
  const handleFocus = (e) => backgroundActive(false);
  const handleBlur = (e) => backgroundActive(true);

  return (
    <SearchContainer>
      <SearchElements>
        <SearchBox>
          <SearchInputWrapper>
            <SearchBoxLogo src={githubLogo} alt="github-logo" />
            <SearchTitle>Search React Issues</SearchTitle>
            <SearchInput
              type="text"
              placeholder="Search"
              onChange={handleText}
              onKeyDown={handleArrowKeys}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <SearchItemsList
              items={searchResults}
              index={index}
              setArrowKeys={setArrowKeys}
            />
          </SearchInputWrapper>
        </SearchBox>
      </SearchElements>
    </SearchContainer>
  );
}
