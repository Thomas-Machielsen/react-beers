const postData = (url, data) => fetch(url, { // eslint-disable-line  no-undef
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .catch(error => error)
  .then(response => response);

const getData = (url, token) => {
  const myHeaders = new Headers(); // eslint-disable-line no-undef
  myHeaders.append('x-access-token', token);

  return fetch(url, { // eslint-disable-line no-undef
    headers: myHeaders,
  })
    .then(res => res.json())
    .catch(err => err)
    .then(response => response);
};

export default { postData, getData };
