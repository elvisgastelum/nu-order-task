export function searchIssues(search, itemList) {
  if (search === '' || itemList === [])
    return [];


  var rx = new RegExp(`([^"]*${search}[^"]*)`, 'gi');
  const listFiltered = itemList.filter(item => filterResults(item, rx));
  const slicedList = listFiltered.slice(0, 5);
  return slicedList;
}
function filterResults({ title, labels, body }, rx) {
  return matchResult(title, rx) || matchResult(labels, rx) || matchResult(body, rx);
}
function matchResult(item, rx) {
  if (Array.isArray(item)) {
    var result = item.filter(({ name }) => {
      return String(name).match(rx);
    });

    return result.length > 0 ? true : false;
  }

  return String(item).match(rx);
}
