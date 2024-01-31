const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__site-nav');

const setMenuState = () => {
  button.addEventListener('click', () => {
    if (!menu.classList.contains('header__site-nav--open')) {
      button.classList.add('header__button--active')
      menu.classList.add('header__site-nav--open')
    }
    else {
      button.classList.remove('header__button--active')
      menu.classList.remove('header__site-nav--open')
    }
  })
}

export {setMenuState}
