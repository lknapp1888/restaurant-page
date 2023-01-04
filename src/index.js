import './style.css';
import loadMain from './loadMain.js';
import loadMenu from './loadMenu.js';
import loadContact from './loadContact.js';

loadMain();

const tabs = document.querySelectorAll('.tab');

tabs.forEach((e) => {
  e.addEventListener('click', () => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    e.classList.add('active');
    e.classList[1] === 'menu-tab' ? loadMenu() : e.classList[1] === 'about-tab' ? loadMain() : loadContact();
  });
});
