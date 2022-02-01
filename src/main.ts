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

// const categories = data.destinations.reduce((names, destination) => {
//   if (!names.includes(destination.name)) {
//     names.push(destination.name);
//   }
//   return names;
// }, [] as string[]);

// console.log(categories);
