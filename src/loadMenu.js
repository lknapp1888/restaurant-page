export default function loadMenu() {
  const element = document.querySelector('.content-container');
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
  element.classList.add('menu-element');

  const menuData = [
    {
      title: 'Starters',
      items: [
        { name: 'Crispy Fried Calamari', price: '8 GDP' },
        { name: 'Loaded Nachos', price: '9 GDP' },
        { name: 'Spinach and Artichoke Dip', price: '7 GDP' },
        { name: 'Mozzarella Sticks', price: '7 GDP' },
        { name: 'Chicken Wings', price: '8 GDP' },
        { name: 'BBQ Ribs', price: '10 GDP' },
        { name: 'Fried Pickles', price: '6 GDP' },
        { name: 'Bruschetta', price: '6 GDP' },
        { name: 'Breaded Zucchini', price: '7 GDP' },
        { name: 'Garlic Bread', price: '5 GDP' },
      ],
    },
    {
      title: 'Burgers',
      items: [
        { name: 'The Juicy Luicy', price: '12 GDP' },
        { name: 'The Big Cheese', price: '11 GDP' },
        { name: 'The Burger of Champions', price: '13 GDP' },
        { name: 'The Meat Monster', price: '14 GDP' },
        { name: 'The Oh-So-Saucy Burger', price: '10 GDP' },
        { name: 'The BBQ Bandit', price: '12 GDP' },
        { name: 'The Triple Threat Burger', price: '15 GDP' },
        { name: 'The Spicy Southwestern Burger', price: '11 GDP' },
        { name: 'The Classic with a Twist', price: '10 GDP' },
        { name: 'The Veggie Venture', price: '9 GDP' },
      ],
    },
    {
      title: 'Sides',
      items: [
        { name: 'Fries', price: '4 GDP' },
        { name: 'Onion Rings', price: '5 GDP' },
        { name: 'Mozzarella Sticks', price: '6 GDP' },
        { name: 'Buffalo Wings', price: '7 GDP' },
        { name: 'Loaded Nachos', price: '8 GDP' },
        { name: 'Mac and Cheese Bites', price: '6 GDP' },
        { name: 'Fried Pickles', price: '5 GDP' },
        { name: 'Breaded Zucchini', price: '4 GDP' },
        { name: 'Corn on the Cob', price: '3 GDP' },
        { name: 'Coleslaw', price: '2 GDP' },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Soda', price: '2 GDP' },
        { name: 'Iced Tea', price: '2 GDP' },
        { name: 'Lemonade', price: '3 GDP' },
        { name: 'Milkshake', price: '4 GDP' },
        { name: 'Smoothie', price: '4 GDP' },
        { name: 'Coffee', price: '2 GDP' },
        { name: 'Hot Tea', price: '2 GDP' },
        { name: 'Chocolate Milk', price: '3 GDP' },
        { name: 'Orange Juice', price: '3 GDP' },
        { name: 'Apple Juice', price: '3 GDP' },
      ],
    },
    {
      title: 'Beers',
      items: [
        { name: 'Foamy Lager', price: '5 GDP' },
        { name: 'Hoppy Pilsner', price: '6 GDP' },
        { name: 'Crisp Wheat Ale', price: '6 GDP' },
        { name: 'Dark Stout', price: '7 GDP' },
        { name: 'Smooth Porter', price: '7 GDP' },
        { name: 'Robust Red Ale', price: '6 GDP' },
        { name: 'Bold Black IPA', price: '7 GDP' },
        { name: 'Malty Scotch Ale', price: '7 GDP' },
        { name: 'Tropical Fruit Beer', price: '6 GDP' },
        { name: 'Spicy Ginger Beer', price: '6 GDP' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Chocolate Cake', price: '6 GDP' },
        { name: 'Cheesecake', price: '7 GDP' },
        { name: 'Carrot Cake', price: '6 GDP' },
        { name: 'Red Velvet Cake', price: '7 GDP' },
        { name: 'Ice Cream Sundae', price: '5 GDP' },
        { name: 'Fruit Tart', price: '6 GDP' },
        { name: 'Chocolate Chip Cookies', price: '4 GDP' },
        { name: 'Brownies', price: '5 GDP' },
        { name: 'Peanut Butter Pie', price: '6 GDP' },
        { name: 'Pecan Pie', price: '7 GDP' },
      ],
    },
  ];

  // Create menu title
  const menuTitle = document.createElement('h1');
  menuTitle.innerText = 'The Burger Brewery Menu';
  element.appendChild(menuTitle);

  menuData.forEach((section) => {
    // Create section element
    const sectionElement = document.createElement('div');
    sectionElement.classList.add('menu-section');
    sectionElement.innerHTML = `<h2>———— ${section.title} ————</h2><ul></ul>`;
    element.appendChild(sectionElement);

    const sectionList = sectionElement.querySelector('ul');

    // Add items to section
    section.items.forEach((item) => {
      const itemElement = document.createElement('li');
      itemElement.innerText = `${item.name} - ${item.price}`;
      sectionList.appendChild(itemElement);
    });
  });

  console.log('I AM MENU!');
}
