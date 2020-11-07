const contactUsModal = document.querySelector('.modal-contact-us');
const closeButtons = document.querySelectorAll('.close-modal');
const contactUsButton = document.querySelector('.contacts .button');
const modalForm = contactUsModal.querySelector('.modal .modal-form');
const userName = contactUsModal.querySelector('.first-form-input');
const userEmail = contactUsModal.querySelector('.second-form-input');
const userText = contactUsModal.querySelector('.third-form-input');


let isStorageSupported = true;
let storageName = '';
let storageUserEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageUserEmail = localStorage.getItem('mail');
} catch (e) {
  isStorageSupported = false;
}

contactUsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  contactUsModal.classList.toggle('make-visible');
  if(storageName && storageUserEmail) {
    userName.value = storageName;
    userEmail.value = storageUserEmail;
    userText.focus();
  } else {
    userName.focus();
  }
});
/*Если клик не по модальному окну,а по любому элементу на странице, закроем модалку. */
document.addEventListener('click', function (evt) {
  let target = evt.target;
  let currentElemContactUs = target == contactUsModal || contactUsModal.contains(target);
  let isntButtonContact = target == contactUsButton;
  let modalIsActiveContact = contactUsModal.classList.contains('make-visible');
  if(!currentElemContactUs && modalIsActiveContact && !isntButtonContact) {
    contactUsModal.classList.toggle('make-visible');
    contactUsModal.classList.remove('modal-error');
  };
})

for(i=0;i<closeButtons.length;i++) {
  closeButtons[i].addEventListener('click', function() {
    this.parentElement.classList.remove('make-visible');
    this.parentElement.classList.contains('modal-error') ? this.parentElement.classList.remove('modal-error') : '';
  });
}
/*Специально сделал через document,чтобы любые модалки закрывал*/
document.addEventListener('keydown', function(evt){
  if(evt.code == 'Escape') {
    let elem = document.querySelector('.make-visible');
    elem.classList.remove('make-visible');
    if(elem.classList.contains('modal-error')){
      elem.classList.remove('modal-error');
    };
  }
})

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
