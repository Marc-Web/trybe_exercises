window.onload = () => fetchJoke();
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then((response) => {
      return response.json()
    })
    .then(data => {
      document.getElementById('jokeContainer').innerText = data.joke
    }
  );
};
