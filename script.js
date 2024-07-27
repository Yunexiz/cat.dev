const apiUrl = 'https://meme-api.com/gimme/catpictures';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.url;
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Cat picture from Reddit' ;

    const imageContainer = document.getElementById('cat-pics');
    imageContainer.appendChild(imageElement);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });