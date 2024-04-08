let urvin1 = document.querySelector('.urvin1')
let urvin2 = document.querySelector('.urvin2')
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let reset = document.querySelector('.reset');
let a=0;b=0

btn1.addEventListener('click', ()=> {
   let num = document.getElementById('shot').value;
      if(num>a && num>b){
         a++;
      }
      if(a == num){
         urvin1.style.color = "green";
         urvin2.style.color = "red";
      }
   urvin1.textContent = a;
})

btn2.addEventListener('click', ()=> {
   let num = document.getElementById('shot').value;
      if(num>b && num>a){
         b++;
      }
      if(b == num){
         urvin2.style.color = "green";
         urvin1.style.color = "red";
      }
   urvin2.textContent = b;
})
reset.addEventListener('click', () => {
   a=0;b=0;
   urvin1.textContent = 0;
   urvin2.textContent = 0;
   urvin2.style.color = "#000";
   urvin1.style.color = "#000";
})
// option.addEventListener('click', () => {
//    a=0;b=0;
//    urvin1.textContent = 0;
//    urvin2.textContent = 0;
//    urvin2.style.color = "#000";
//    urvin1.style.color = "#000";
// })
let num = document.getElementById('shot')
num.addEventListener('change', () => {
   a=0;b=0;
   urvin1.textContent = 0;
   urvin2.textContent = 0;
   urvin2.style.color = "#000";
   urvin1.style.color = "#000";
})