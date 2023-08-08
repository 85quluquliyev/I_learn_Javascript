const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = [
    'tomato',
    'lightgreen',
    'black',
    'orange',
    'purple'
]
button.addEventListener('click', changeBackground);

let sira = 0;

function changeBackground(){
   // const randomValue = Math.floor(Math.random() * colors.length);
   //const selectedColor = colors[randomValue]
   // body.style.backgroundColor = selectedColor;

    if(sira==colors.length) sira=0;
    const selectedColor = colors[sira];
    sira++;
    body.style.backgroundColor = selectedColor;



}
