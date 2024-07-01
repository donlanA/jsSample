const btn1 = document.getElementById('button1');
const ans1 = document.getElementById('input1');

let a;

btn1.addEventListener('click', () => {
  console.log('if else --------');
  a = Number(ans1.value);
  if (a == 0 || a == 1){
    console.log(1);
  }else if(a == 2){
    console.log(2);
  }else{
    console.log(3);
  }
  console.log('----------------');
});

// --------------------------------------------

const btn2 = document.getElementById('button2');
const ans2 = document.getElementById('input2');

let b;

btn2.addEventListener('click', () => {
  console.log('switch case ----');
  b = Number(ans2.value);
  switch (b){
    case 0:
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    default:
      console.log(3);
      break;
  }
  console.log('----------------');
});

// --------------------------------------------

const btn3 = document.getElementById('button3');
const ans3 = document.getElementById('input3');

let c;

btn3.addEventListener('click', () => {
  console.log('for loop -------');
  c = Number(ans3.value);
  for(let i = 0; i < c; i++) {
    console.log(i);
  }
  console.log('----------------');
});

// --------------------------------------------

const btn4 = document.getElementById('button4');
const ans4 = document.getElementById('input4');

let d;

btn3.addEventListener('click', () => {
  console.log('while loop -----');
  d = Number(ans4.value);
  let count=0;
  while(count < d) {
    console.log(count);
    count++;
  }
  console.log('----------------');
});