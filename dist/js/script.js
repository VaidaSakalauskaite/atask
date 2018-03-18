const slc = document.querySelectorAll('.selection');
const par = document.querySelectorAll('.selection p');
const desc = document.querySelectorAll('.desc');
const arrows = document.querySelectorAll('.fas.fa-angle-right');

slc.forEach((slc,i)=>{
  slc.addEventListener('click',()=>{
    console.log('asdfsfas')
  par[i].classList.toggle('p-active');
  desc[i].classList.toggle('desc-active')
  arrows[i].classList.toggle('i-active')
});
});
