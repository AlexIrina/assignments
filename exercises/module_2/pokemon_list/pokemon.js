// Use https://api.vschool.io/pokemon as your url for your XHR request to get the big list of pokemon.

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data);
    showData(data.objects[0].pokemon);
  }
};

function showData(arr) {
  for (let i = 0; i < arr.length; i++) {
    // const h1 = document.createElement('h1');
    const li = document.createElement('li');
    const p = document.createElement('p');

    // add the name of whoever you're currently looping over
    li.textContent = arr[i].name;
    document.getElementById('list').appendChild(li);

    p.textContent = 'things about the pokemon';

    document.getElementById('list').appendChild(p);

    // repeat the process until the end of the names arr
  }
}
