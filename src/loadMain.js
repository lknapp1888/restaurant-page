import burgerImage from './burger.jpg';

export default function loadMain() {
  const element = document.querySelector('.content-container');
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }

  // Add the image to our existing div.
  const burgerImg = new Image();
  burgerImg.src = burgerImage;

  element.appendChild(burgerImg);

  // Add paragraph description

  const restaurantDescription = document.createElement('p');
  restaurantDescription.textContent = 'American-Anglo fusion burgers. Set menu and custom options available on request. Please see below for more information and to reserve a table.';
  element.appendChild(restaurantDescription);

  // add reserve button
  const reserveTableBtn = document.createElement('button');
  reserveTableBtn.textContent = 'RESERVE A TABLE';
  element.appendChild(reserveTableBtn);
}
