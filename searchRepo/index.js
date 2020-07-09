const searchURL = 'https://api.github.com/users/'
function displayResults(responseJson){
    console.log(responseJson);
  $('#results-list').empty();
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < responseJson.length; i++){
    // for each video object in the articles
    //array, add a list item to the results 
    //list with the article title, source, author,
    //description, and image
    $('#results-list').append(
      `<li><h3><a href="${responseJson[i].url}">${responseJson[i].url}</a></h3>
      <p>description: ${responseJson[i].description}</p>
      <p>Name:${responseJson[i].name}</p>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};
function getNews(query) {
    const url = searchURL  + query+'/repos';
  
    console.log(url);
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
};
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      getNews(searchTerm);
    });
  };
  
  $(watchForm);