import { useEffect } from 'react';

import { useSessionStorage } from 'hooks/use-session-storage';
import { fetchList } from './fetchList';

/**
 * Fetch the last 100 Github issues and pull request on the React's repo
 *
 * @param {Array} initialList The initialState represent the initial list
 * @param {React.Dispatch<{messages: string, errorEvent: Error}>} setError callback to dispatch an error when fails the fetch
 * @return {list} Return the list to consume
 */
export const useGithubIssuesList = (initialList, setError) => {
  const [list, setList] = useSessionStorage('github-issues-list', initialList);

  useEffect(() => {
    async function fetchData() {
      try {
        const issuesList = await fetchList();
        setList(issuesList);
      } catch (error) {
        setError({
          message: 'Error to fetch Github Issues List',
          errorEvent: error,
        });
      }
    }
    if (list === initialList) {
      fetchData();
    }
  }, [setList, list, initialList, setError]);

  return list;
};
