export default function loadMenu() {
  const element = document.querySelector('.content-container');
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }

  const menuData = [
    {
      title: 'Burgers',
      items: [
        { name: 'Classic Burger', price: '10 GDP' },
        { name: 'Cheese Burger', price: '11 GDP' },
        { name: 'Bacon Burger', price: '12 GDP' },
        { name: 'Veggie Burger', price: '9 GDP' },
      ],
    },
    {
      title: 'Sides',
      items: [
        { name: 'French Fries', price: '5 GDP' },
        { name: 'Onion Rings', price: '6 GDP' },
        { name: 'Side Salad', price: '4 GDP' },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Soda', price: '3 GDP' },
        { name: 'Water', price: '2 GDP' },
        { name: 'Milkshake', price: '7 GDP' },
      ],
    },
  ];

  // Create menu title
  const menuTitle = document.createElement('h1');
  menuTitle.innerText = 'Burger Restaurant Menu';
  element.appendChild(menuTitle);

  menuData.forEach((section) => {
    // Create section element
    const sectionElement = document.createElement('div');
    sectionElement.innerHTML = `<h2>${section.title}</h2><ul></ul>`;
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
