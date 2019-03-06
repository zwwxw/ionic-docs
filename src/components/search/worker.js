const index = fetch('/docs/assets/search/index.json').then(res => res.json());

addEventListener('message', handleMessage);

function handleMessage({ data: query }) {
  index
    .then(records => performSearch(query, records))
    .then(results => postMessage(results));
}

function performSearch(query, records) {
  return records.filter(record => record.title.toLowerCase().includes(query.toLowerCase()));
}
