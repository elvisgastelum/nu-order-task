export async function fetchList() {
  const data = await fetch(
    'https://api.github.com/repos/facebook/react/issues?per_page=100'
  );
  const list = await data.json();

  return list;
}
