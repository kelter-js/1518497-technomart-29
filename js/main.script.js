const contactUsModal = document.querySelector(".modal-contact-us");
const closeButtons = document.querySelectorAll(".close-modal");
const contactUsButton = document.querySelector(".contacts .button");
const map = document.querySelector(".map-button");
const modalMap = document.querySelector(".modal-map");
const mapImage = document.querySelector(".map-button img");
const promoParent = document.querySelector(".promo-block-carousel");
const serviceParent = document.querySelector(".service-list-description-wrapper");
const addToCartButtons = document.querySelectorAll(".goods-buy-button");
const innerModalSuccesAdded = document.querySelector(".modal-cart");
const closeButton = document.querySelector(".close-modal");

let isStorageSupported = true;
let storageName = "";
let storageUserEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageUserEmail = localStorage.getItem("mail");
} catch (e) {
  isStorageSupported = false;
}
if(contactUsButton) {
  const modalForm = contactUsModal.querySelector(".modal .modal-form");
  const userName = contactUsModal.querySelector(".first-form-input");
  const userEmail = contactUsModal.querySelector(".second-form-input");
  const userText = contactUsModal.querySelector(".third-form-input");
  contactUsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactUsModal.classList.toggle("make-visible");
    if(storageName && storageUserEmail) {
      userName.value = storageName;
      userEmail.value = storageUserEmail;
      userText.focus();
    } else {
      userName.focus();
    }
  });
  modalForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userText.value) {
      evt.preventDefault();
      contactUsModal.classList.remove("modal-error");
      contactUsModal.offsetWidth = contactUsModal.offsetWidth;
      contactUsModal.classList.add("modal-error");
    } else {
      if (isStorageSupported) {
        localStorage.setItem("name", userName.value);
        localStorage.setItem("mail", userEmail.value);
      }
    }
  });
  document.addEventListener("click", function (evt) {
    let target = evt.target;
    let currentElemContactUs = target == contactUsModal || contactUsModal.contains(target);
    let isntButtonContact = target == contactUsButton;
    let modalIsActiveContact = contactUsModal.classList.contains("make-visible");
    if(!currentElemContactUs && modalIsActiveContact && !isntButtonContact) {
      contactUsModal.classList.toggle("make-visible");
      contactUsModal.classList.remove("modal-error");
    };
  })
}

for(i=0;i<closeButtons.length;i++) {
  closeButtons[i].addEventListener("click", function() {
    this.parentElement.classList.remove("make-visible");
    this.parentElement.classList.contains("modal-error") ? this.parentElement.classList.remove("modal-error") : "";
  });
}
document.addEventListener("keydown", function(evt){
  if(evt.code == "Escape") {
    let elem = document.querySelector(".make-visible");
    elem.classList.remove("make-visible");
    if(elem.classList.contains("modal-error")){
      elem.classList.remove("modal-error");
    };
  }
})

if(map) {
  map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.toggle("make-visible");
  });
  document.addEventListener("click", function (evt) {
    let target = evt.target;
    let currentElemContactUs = target == modalMap || modalMap.contains(target);
    let isntButtonContact = target == map;
    let isntButtonImg = target == mapImage;
    let modalIsActiveContact = modalMap.classList.contains("make-visible");
    if(!currentElemContactUs && modalIsActiveContact && !isntButtonContact && !isntButtonImg) {
      modalMap.classList.toggle("make-visible");
    };
  });
}

if(promoParent && serviceParent) {
  const perf = promoParent.querySelector(".perf");
  const drill = promoParent.querySelector(".drill");
  const firstSlideControl = promoParent.querySelector(".promo-block-carousel .first-slide");
  const secondSlideControl = promoParent.querySelector(".promo-block-carousel .second-slide");
  const delivery = serviceParent.querySelector(".delivery");
  const credit = serviceParent.querySelector(".credit");
  const guarantee = serviceParent.querySelector(".guarantee");

  promoParent.addEventListener("click", function(evt) {
    if(evt.target.tagName != "BUTTON") {
      return;
    }

    perf.classList.toggle("current-slide");
    drill.classList.toggle("current-slide");

    firstSlideControl.classList.toggle("current");
    secondSlideControl.classList.toggle("current");
  });
  serviceParent.addEventListener("click", function(evt) {
    evt.preventDefault();
    let target = evt.target;

    if(!target.parentElement.classList.contains("services-list-item")) return;

    serviceParent.querySelector(".selected-service").classList.remove("selected-service");

    target.closest("li").classList.add("selected-service");

    if(target.classList.contains("credit-link")) {
      serviceParent.querySelector(".current-slide").classList.remove("current-slide");
      credit.classList.add("current-slide");
    } else if (target.classList.contains("guarantee-link")) {
      serviceParent.querySelector(".current-slide").classList.remove("current-slide");
      guarantee.classList.add("current-slide");
    } else {
      serviceParent.querySelector(".current-slide").classList.remove("current-slide");
      delivery.classList.add("current-slide");
    }
  });
}

if(innerModalSuccesAdded) {
  const keepShoppingButton = innerModalSuccesAdded.querySelector(".button-keep-shopping");
  keepShoppingButton.addEventListener("click", function() {
    innerModalSuccesAdded.classList.remove("make-visible");
  });
  for(let i=0;i<addToCartButtons.length;i++) {
    addToCartButtons[i].addEventListener("click", function() {
      innerModalSuccesAdded.classList.toggle("make-visible");
    });
  }
  document.addEventListener("click", function (evt) {
    let target = evt.target;
    let currentElemContactUs = target == innerModalSuccesAdded || innerModalSuccesAdded.contains(target);
    let isntButtonContact = Array.from(addToCartButtons).includes(target);
    let modalIsActiveContact = innerModalSuccesAdded.classList.contains("make-visible");
    if(!currentElemContactUs && modalIsActiveContact && !isntButtonContact) {
      innerModalSuccesAdded.classList.toggle("make-visible");
    };
  })
}
