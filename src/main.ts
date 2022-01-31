import data from '../data.json';

const nav = document.querySelector('.primary-navigation') as HTMLUListElement;
const navBtn = document.querySelector(
  '.btn--mobile-toggle'
) as HTMLButtonElement;

navBtn.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible')!;

  if (visibility === 'false') {
    nav.setAttribute('data-visible', 'true');
    navBtn.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('data-visible', 'false');
    navBtn.setAttribute('aria-expanded', 'false');
  }
});

console.log(data.crew[0]);
