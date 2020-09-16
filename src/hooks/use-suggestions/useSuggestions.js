import { useState } from 'react';

import { useGithubIssuesList } from 'hooks/use-github-issues-list';
import { useArrowKeys } from 'hooks/use-arrow-keys';
import { searchIssues } from './searchIssues';

/**
 * Create suggestions for a component
 *
 * @param {Array} initialState The initialState represent the initial searchResults
 * @return {[searchResults, newSearchResults, number, setArrowKeys]} Return the searchResults, newSearchResults, index, setArrowKeys for consume
 */
export const useSuggestions = (initialState) => {
  const list = useGithubIssuesList([]);
  const [searchResults, setSearchResults] = useState(initialState);
  const [index, handleArrowKeys] = useArrowKeys(0, handleEnter);

  /**
   * Generate new results from a value
   *
   * @param {String} value The value is used how part of the new search result
   */
  const newSearchResults = (value) => {
    setSearchResults(searchIssues(value, list));
  };

  /**
   * Used for manipulate the index selected on the items
   * of the searchResults.
   *
   * @param {Number} keyCode - Have the number with the code for sum, rest or other thing
   * @param {Number=} index  - Optional param for the MOUSE_EVENT
   */
  const setArrowKeys = (keyCode, index) => {
    if (index) {
      handleArrowKeys(keyCode, index);
    } else {
      handleArrowKeys(keyCode, searchResults.length);
    }
  };

  /**
   * Open in other tab the result selected
   */
  function handleEnter() {
    const itemSelected = searchResults[index].html_url;

    window.open(itemSelected, '_blank');
  }

  return [searchResults, newSearchResults, index, setArrowKeys];
};
