import './styles.css';
import menuElement from './menu.json';
import menuTemplate from './templates/template-items.hbs';

const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('ul.js-menu')
}


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

refs.menu.insertAdjacentHTML('beforeend', menuTemplate (menuElement));

refs.switch.addEventListener('change', setClassList);
// refs.switch.addEventListener('change', setLocalStorage);


function setClassList(e) {
  const check = refs.switch.checked;
    if (check) {
    changeTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    } else {
    changeTheme(Theme.LIGHT, Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
    }
   
}
function changeTheme(addTheme, removeTheme) {
  refs.body.classList.add(addTheme);
  refs.body.classList.remove(removeTheme);
  }
  
  
const themeLocal = localStorage.getItem('theme');

if (themeLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}