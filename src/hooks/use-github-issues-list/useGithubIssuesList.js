import { useEffect } from 'react';

import { useSessionStorage } from 'hooks/use-session-storage';
import { fetchList } from './fetchList'


/**
 * Fetch the last 100 Github issues and pull request on the React's repo 
 *
 * @param {Array} initialList The initialState represent the initial list
 * @return {list} Return the list to consume
 */
export const useGithubIssuesList = initialList => {
  const [ list, setList ] = useSessionStorage("github-issue-list", initialList);

  useEffect(() => {
    async function fetchData() {
      setList(await fetchList())
    }
    if (list === initialList) {
      fetchData();
    }
  }, [ setList, list, initialList ])

  return list;
}
