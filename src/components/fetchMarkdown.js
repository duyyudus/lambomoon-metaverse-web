export function fetchMarkdown(url, setter) {
  fetch(url)
    .then(response => {
      // console.log('theGame.md response:');
      // console.log(response);
      return response.text();
    })
    .then(data => {
      setter(data);
      // console.log('theGame.md text:');
      // console.log(data);
    })
    .catch(error => {
      console.log('fetchMarkdown error:');
      console.log(error);
    });
}
