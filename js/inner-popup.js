const addToCartButtons = document.querySelectorAll('.goods-buy-button');
const innerModalSuccesAdded = document.querySelector('.modal-cart');
const keepShoppingButton = innerModalSuccesAdded.querySelector('.button-keep-shopping');
const closeButton = document.querySelector('.close-modal');


for(let i=0;i<addToCartButtons.length;i++) {
  addToCartButtons[i].addEventListener('click', function() {
    innerModalSuccesAdded.classList.toggle('make-visible');
  });
}
closeButton.addEventListener('click', function() {
  this.parentElement.classList.remove('make-visible');
});
keepShoppingButton.addEventListener('click', function() {
  innerModalSuccesAdded.classList.remove('make-visible');
});
document.addEventListener('keydown', function(evt){
  if(evt.code == 'Escape') {
    let elem = document.querySelector('.make-visible');
    elem.classList.remove('make-visible');
  }
})
document.addEventListener('click', function (evt) {
  let target = evt.target;
  let currentElemContactUs = target == innerModalSuccesAdded || innerModalSuccesAdded.contains(target);
  let isntButtonContact = Array.from(addToCartButtons).includes(target);
  let modalIsActiveContact = innerModalSuccesAdded.classList.contains('make-visible');
  if(!currentElemContactUs && modalIsActiveContact && !isntButtonContact) {
    innerModalSuccesAdded.classList.toggle('make-visible');
  };
})
