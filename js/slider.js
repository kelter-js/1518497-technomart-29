const promoParent = document.querySelector('.promo-block-carousel');

const perf = promoParent.querySelector('.perf');
const drill = promoParent.querySelector('.drill');

const firstSlideControl = promoParent.querySelector('.promo-block-carousel .first-slide');
const secondSlideControl = promoParent.querySelector('.promo-block-carousel .second-slide');


const serviceParent = document.querySelector('.service-list-description-wrapper');

const delivery = serviceParent.querySelector('.delivery');
const credit = serviceParent.querySelector('.credit');
const guarantee = serviceParent.querySelector('.guarantee');

serviceParent.addEventListener('click', function(evt) {
  evt.preventDefault();
  let target = evt.target;

  if(!target.parentElement.classList.contains('services-list-item')) return;

  serviceParent.querySelector('.selected-service').classList.remove('selected-service');

  target.closest('li').classList.add('selected-service');

  if(target.classList.contains('credit-link')) {
    serviceParent.querySelector('.current-slide').classList.remove('current-slide');
    credit.classList.add('current-slide');
  } else if (target.classList.contains('guarantee-link')) {
    serviceParent.querySelector('.current-slide').classList.remove('current-slide');
    guarantee.classList.add('current-slide');
  } else {
    serviceParent.querySelector('.current-slide').classList.remove('current-slide');
    delivery.classList.add('current-slide');
  }
});


promoParent.addEventListener('click', function(evt) {
  if(evt.target.tagName != 'BUTTON') {
    return;
  }

  perf.classList.toggle('current-slide');
  drill.classList.toggle('current-slide');

  firstSlideControl.classList.toggle('current');
  secondSlideControl.classList.toggle('current');
});

