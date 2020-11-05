const header = document.querySelector('#header');
const message = document.querySelectorAll('.message');
const clearBtn = document.querySelector('#clear-button');
const themeDropDown = document.querySelector('#theme-drop-down');
const messagesContainer = document.querySelector('.messages')
const h1 = document.createElement('h1')
const p = document.createElement('p')
const span = document.createElement('span')
const pText = document.createTextNode(' Wrote this Javascript.')
const messageForm = document.querySelector('form');
const messageInput = messageForm.input; 
const sendButton = document.querySelector('#sendBtn')

const niceArray = ['Hello Billy','Hello Bob','How are you Billy?','Im doing great. How are you Bob?'];

for(let i = 0; i < message.length; i++){
  message[i].textContent = niceArray[i]
}

h1.textContent = 'Javascript Made This!!'


// clears messages
clearBtn.addEventListener('click', function(){
 messagesContainer.textContent = ''
})

// changes theme colors
themeDropDown.addEventListener('change', function(e){
  let color = e.target.value;

  let leftColor;
  let rightColor;

  if(color === 'theme-one'){
    leftColor = 'brown'
    rightColor = 'blue'
  }

  if(color === 'theme-two'){
    leftColor = 'red'
    rightColor = 'black'
  }

  for(let i = 0; i < message.length; i++){

    if(message[i].className.includes('left')){
      message[i].style.backgroundColor = leftColor
      message[i].style.color = 'white'
    }

    if(message[i].className.includes('right')){
      message[i].style.backgroundColor = rightColor
      message[i].style.color = 'white'
    }
  }

})

span.classList.add('name')
span.textContent = 'Alex';

p.appendChild(span)
p.appendChild(pText)

header.appendChild(h1)
header.appendChild(p)

// to specify when to send messages to the left or right
// starts at left so count has to start at 1
let messageCount = 1

sendButton.addEventListener('click', function(e){
  e.preventDefault()
  const div = document.createElement('div');
  //if message count not even then the sent message will go to the left otherwise right
  if(messageCount % 2 !== 0){
    div.className = 'message left'
    messageCount ++
    console.log(messageCount + 'left');
  }else {
    div.className = 'message right'
    messageCount ++
    console.log(messageCount);
  }
  // new message value
  div.textContent = messageInput.value
  messagesContainer.appendChild(div)
}) 


