import { getElement, hideContent, showContent } from './utils';

// NAVIGATION
// const nav = getElement('.primary-navigation', document) as HTMLUListElement;
// const navBtn = getElement('.btn--mobile-toggle', document) as HTMLButtonElement;

// navBtn.addEventListener('click', () => {
//   const visibility = nav.getAttribute('data-visible')!;

//   if (visibility === 'false') {
//     nav.setAttribute('data-visible', 'true');
//     navBtn.setAttribute('aria-expanded', 'true');
//   } else {
//     nav.setAttribute('data-visible', 'false');
//     navBtn.setAttribute('aria-expanded', 'false');
//   }
// });

// const categories = data.destinations.reduce((names, destination) => {
//   if (!names.includes(destination.name)) {
//     names.push(destination.name);
//   }
//   return names;
// }, [] as string[]);

// console.log(categories);

// TABS

const tabList = getElement('[role="tablist"]', document) as HTMLDivElement;
const tabs = getElement('[role="tab"]', tabList, true) as HTMLButtonElement[];

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;

function changeTabFocus(e: KeyboardEvent) {
  const keyDownLeft = 37;
  const keyDownRight = 39;

  if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
    tabs[tabFocus].setAttribute('tabindex', '-1');
  }

  if (e.keyCode === keyDownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) tabFocus = 0;
  }

  if (e.keyCode === keyDownLeft) {
    tabFocus--;
    if (tabFocus < 0) tabFocus = tabs.length - 1;
  }

  tabs[tabFocus].setAttribute('tabindex', '0');
  tabs[tabFocus].focus();
}

function changeTabPanel(e: MouseEvent) {
  const targetTab = e.target as HTMLButtonElement;
  const targetPanel = targetTab.getAttribute('aria-controls')!;
  const targetImage = targetTab.getAttribute('data-image')!;

  const tabContainer = targetTab.parentNode!;
  const mainContainer = tabContainer.parentNode!;

  tabContainer
    .querySelector('[aria-selected="true"]')!
    .setAttribute('aria-selected', 'false');

  targetTab.setAttribute('aria-selected', 'true');

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, `#${targetPanel}`);

  hideContent(mainContainer, 'picture');
  showContent(mainContainer, `#${targetImage}`);
}
