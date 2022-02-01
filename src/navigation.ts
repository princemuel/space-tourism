import { getElement } from './utils';

// NAVIGATION
const nav = getElement('.primary-navigation', document) as HTMLUListElement;
const navBtn = getElement('.btn--mobile-toggle', document) as HTMLButtonElement;

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
