let count = 0;
const countHeader = document.querySelector("#count");
const countAddBtn = document.querySelector("#add");
const countSubBtn = document.querySelector("#sub");

countHeader.innerText=count;

countAddBtn.addEventListener('click',()=>{
  count++;
  countHeader.innerText=count;
});

countSubBtn.addEventListener('click',()=>{
  count--;
  countHeader.innerText=count;
});