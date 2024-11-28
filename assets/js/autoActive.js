// auto active button

let currentIndex= 0;
let buttons= document.querySelectorAll('.button');

let changeActiveElement= setInterval(()=>{
  buttons.forEach((el)=>{
    el.classList.remove('active-red');
  });
  buttons[currentIndex].classList.add('active-red');
  currentIndex+=1;
  if(currentIndex >=buttons.length) currentIndex = 0;
},1500)