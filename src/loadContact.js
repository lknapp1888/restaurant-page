export default function loadContact() {
  const element = document.querySelector('.content-container');
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  element.appendChild(formContainer);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('form-item-container');
  const formTitle = document.createElement('h2');
  formTitle.textContent = 'SEND US A MESSAGE';
  titleContainer.appendChild(formTitle);
  formContainer.appendChild(titleContainer);

  /// ///////////////////////////////////////////////////
  const nameContainer = document.createElement('div');
  nameContainer.classList.add('form-item-container');
  const name = document.createElement('input');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name*';

  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(name);
  formContainer.appendChild(nameContainer);
  /// /////////////////////////////////////////////////////
  const emailContainer = document.createElement('div');
  emailContainer.classList.add('form-item-container');
  const emailAddress = document.createElement('input');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email address*';

  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailAddress);
  formContainer.appendChild(emailContainer);
  /// ////////////////////////////////////////////////////
  const enquiryContainer = document.createElement('div');
  enquiryContainer.classList.add('form-item-container');
  const enquiry = document.createElement('textarea');
  enquiry.placeholder = 'This is a dummy website. Do not attempt to submit real information';
  const enquiryLabel = document.createElement('label');
  enquiryLabel.textContent = 'Enquiry*';

  enquiryContainer.appendChild(enquiryLabel);
  enquiryContainer.appendChild(enquiry);
  formContainer.appendChild(enquiryContainer);
  /// ////////////////////////////////////////////////////
  const submitContainer = document.createElement('div');
  submitContainer.classList.add('form-item-container');

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitContainer.appendChild(submitBtn);
  formContainer.appendChild(submitContainer);
}
