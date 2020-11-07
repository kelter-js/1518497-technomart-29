const map = document.querySelector('.map-button');
const modalMap = document.querySelector('.modal-map');
const mapImage = document.querySelector('.map-button img');

map.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.toggle('make-visible');
})
document.addEventListener('click', function (evt) {
  let target = evt.target;
  let currentElemContactUs = target == modalMap || modalMap.contains(target);
  let isntButtonContact = target == map;
  let isntButtonImg = target == mapImage;
  let modalIsActiveContact = modalMap.classList.contains('make-visible');
  if(!currentElemContactUs && modalIsActiveContact && !isntButtonContact && !isntButtonImg) {
    modalMap.classList.toggle('make-visible');
  };
})
