import { fetchList } from '../fetchList';
import { useGithubIssuesList } from 'hooks/use-github-issues-list';

import { renderHook } from '@testing-library/react-hooks';

describe('Testing fetchList function', () => {
  var list;

  beforeAll(async () => {
    list = await fetchList();
  });

  test('should be defined', () => {
    expect(list).toBeDefined();
  });

  test('should contain correct properties', () => {
    list.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('labels');
      expect(item).toHaveProperty('body');
      expect(item).toHaveProperty('id');
    });
  });
});

describe('Testing useGithubIssuesList hook', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  beforeAll(() => {});

  test('should be defined', async (done) => {
    const { result, waitForNextUpdate } = renderHook(() => useGithubIssuesList([]));
    await waitForNextUpdate();

    expect(result.current).toBeDefined();
    done();
  });

  test('should contain correct properties', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGithubIssuesList([]));
    await waitForNextUpdate();

    result.current.forEach((item) => {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('labels');
      expect(item).toHaveProperty('body');
      expect(item).toHaveProperty('id');
    });
  });
});
