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

//var dropdown = document.querySelectorAll(.drop-down);
//patikrinti reikia ar toks kintamasis yra
// if(dropdown){
//   dropdown.addEventListener('click', function () {
//     console.log(1342463);
//   })
// }


$ ('.dropdown').click(function () {
  // $('.dropdpwn p').show();
  //visiems pasakom kad jei issiskleides, uzsiskleistu,
  $('.dropdown p ').slideUp();
  //isskleidziam
  $(this).find('p').slideToggle()
  $('.fa .fa-arro-right').css({'transform' : 'rotate('+ 90 +'deg)'});
  $( '.fa .fa-arro-right' ).toggleClass('rotate')
})

$('header  .fa-bars').click(function(){
  console.log(123344);
  $('header').toggleClass('active-menu');
})
