import burgerImage from './hamburger.png';

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
  restaurantDescription.textContent = 'Get ready to sink your teeth into the juiciest burgers around at our no-nonsense burger joint. We don\'t mess around with subpar ingredients - only the best will do for our menu. From the classic Big Cheese to the wild Meat Monster, we\'ve got a burger for every craving. And if you\'re feeling adventurous, try one of our unique sides like fried pickles or breaded zucchini. Wash it all down with a cold beer or a spicy cocktail. And don\'t forget to leave room for a decadent dessert like our famous chocolate cake. So come on in and get your fix.';
  element.appendChild(restaurantDescription);

  // add reserve button
  const reserveTableBtn = document.createElement('button');
  reserveTableBtn.textContent = 'RESERVE A TABLE';
  element.appendChild(reserveTableBtn);
}
