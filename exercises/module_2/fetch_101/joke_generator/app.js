const APIURL = "https://api.icndb.com/jokes/random"
const button = document.getElementById('button')
const jokeContainer = document.getElementById('joke-container')


button.addEventListener('click', () => {
  getRandomJoke()
})

async function getRandomJoke(joke){
  const response = await fetch(APIURL + joke)
  const responseData = await response.json()
  jokeContainer.textContent = responseData.value.joke;
}



function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '🤣 ';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 5 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 2000);